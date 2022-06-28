import { model, Schema, Document } from "mongoose";

interface ICountry extends Document {
  name: string;
  iso2code: string;
}

const CountrySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  iso2code: {
    type: String,
    unique: true,
  },  
});

const CountryModel = model<ICountry>("Country", CountrySchema);

export { CountryModel, ICountry };
