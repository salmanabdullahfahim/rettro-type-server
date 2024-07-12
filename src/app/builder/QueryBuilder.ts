import { FilterQuery, Query, Document } from "mongoose";

interface ProductDocument extends Document {
  name: string;
  brand: string;
  price: number;
  description: string;
  availableQuantity: number;
  rating: number;
  image: string;
}

interface QueryParams {
  searchTerm?: string;
  priceRange?: string;
  sort?: string;
  limit?: number;
  page?: number;
  fields?: string;
}

class QueryBuilder<T extends ProductDocument> {
  public modelQuery: Query<T[], T>;
  public query: QueryParams;

  constructor(modelQuery: Query<T[], T>, query: QueryParams) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // search method
  search(searchableFields: string[]) {
    const searchTerm = this.query?.searchTerm as string;

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: "i" },
            }) as FilterQuery<T>
        ),
      });
    }

    return this;
  }

  // filter method
  filter() {
    const queryObj: FilterQuery<T> = { ...this.query };

    // Filtering for price range

    if (this.query.priceRange) {
      const [minPrice, maxPrice] = this.query.priceRange.split("-").map(Number);
      queryObj.price = { $gte: minPrice, $lte: maxPrice };
      delete queryObj.priceRange;
    }

    const excludeFields = [
      "searchTerm",
      "priceRange",
      "sort",
      "limit",
      "page",
      "fields",
    ];

    excludeFields.forEach((el) => delete queryObj[el]);

    this.modelQuery = this.modelQuery.find(queryObj);

    return this;
  }

  // sort method
  sort() {
    const sort = this.query?.sort || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sort);
    return this;
  }

  // pagination
  paginate() {
    const page = Number(this.query?.page) || 1;
    const limit = Number(this.query?.limit) || 10;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  // fields limiting
  fields() {
    const fields = this.query?.fields?.split(",").join(" ") || "-__v";
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}

export default QueryBuilder;
