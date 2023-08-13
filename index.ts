interface GenericKeyValue {
    [key: string]: any;
}

declare module "tinydot" {
   function tinydot(): GenericKeyValue;
   export = tinydot;
 }