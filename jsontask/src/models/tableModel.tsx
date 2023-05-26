export class TableModel {
    public name: string = '';
    public region: string = '';
    public email: string = '';    
    public id: number = 0;
    public phone: number = 0;
  
    constructor(item: any ) {
      this._setName(item);
      this._setRegion(item);
      this._setEmail(item);
      this._setId(item);
      this._setPhone(item)
    }
  
  
    /**
     * set name
     * @param name
     * @private
     */
    private _setName({ name }: any) {
      this.name = name;
    }
    /**
     * set region
     * @param region
     * @private
     */
    private _setRegion({ region }: any) {
      this.region = region || null;
    }
  /**
     * set email
     * @param email
     * @private
     */
    private _setEmail({ email }: any) {
      this.email = email;
    }
  
    /**
     * set id
     * @param id
     * @private
     */
    private _setId({ id }: any) {
      this.id = id;
    } 
   
    /**
     * set is signed
     * @param phone
     * @private
     */
    private _setPhone(phone: any) {
      this.phone = phone;
    }
  
    
  }
  