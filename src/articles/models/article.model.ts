import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

export interface ArticleAttributes {
  id?: number;
  name: string;
  modified?: Date;
  brand: string;
  isActive?: boolean;
}

@Table({
  tableName: "articulos",
  timestamps: true,
  createdAt: "fecha_creacion",
  updatedAt: "fecha_modificacion"
})
export class Article extends Model<Article, ArticleAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: "id" })
  id: number;

  @Column({ field: "nombre" })
  name: string;

  @Column({ field: "marca" })
  brand: string;

  @Column({ field: "activo", defaultValue: true })
  isActive: boolean;
}
