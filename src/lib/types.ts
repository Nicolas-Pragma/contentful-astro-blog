import type { EntryFieldTypes } from "contentful";

export interface Referencias {
  contentTypeId: "referencias";
  fields: {
    titulo: EntryFieldTypes.Text;
  };
}

export interface Tecnologias {
  contentTypeId: "tecnologias";
  fields: {
    titulo: EntryFieldTypes.Text;
    descripcion: EntryFieldTypes.Text;
    imagen: EntryFieldTypes.AssetLink;
    tecnologiasRelacionadas: EntryFieldTypes.Array<
      EntryFieldTypes.EntryResourceLink<Referencias>
    >;
  };
}
