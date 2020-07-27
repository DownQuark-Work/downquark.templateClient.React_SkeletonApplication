/*
  FUNCTION TYPING TEMPLATE
  NAME: <argType[s(OR|AND)argType]>_<ReturnType[s(Or|And)ReturnType]>Type
    EX: string_NumberType =-> ('abc') => 123
        bool_ArrayNumberType =-> (false) =>[1,2,3]
        _ORboolORstring_ArrayNumberOr_
          =-> () => [1,2,3]
          =-> () => void
          =-> (true) => [1,2,3]
          =-> (true) => void
          =-> (false) => [1,2,3]
          =-> (false) => void
          =-> ('elephant') => void
          =-> ('mouse') => [0,2]
*/

declare type generic_Type = <T>(T) => T
declare type _voidType = () => void //explicitly verify void is returned

declare type empty_NumberType = () => number
declare type empty_StringType = () => string
declare type empty_ArrayStringType = () => string[]

declare type string_Type = (string) => void
declare type bool_ArrayStringType = (bool) => string[]