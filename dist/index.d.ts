export default class JSONOptimizer {
  validate(obj: any, replacer?: Function | null, space?: string | number | null): any;
  optimize(obj: any): any;
  stringify(obj: any, replacer?: Function | null, space?: string | number | null): any;
  benchmark(obj: any, iterations?: number): any;
}
