import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Article extends Model {
  @Column
  private _name: string;
  @Column
  private _brand: string;
  @Column
  private _isActive: boolean;

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(brand: string) {
    this._brand = brand;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(isActive: boolean) {
    this._isActive = isActive;
  }
}