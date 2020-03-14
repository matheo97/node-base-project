declare namespace Components {
    namespace Parameters {
        namespace Code {
            export type Code = string;
        }
    }
    namespace Responses {
        export interface Error {
            code?: string;
            message?: string;
        }
        export type Success = Schemas.Success;
    }
    namespace Schemas {
        export interface Success {
            /**
             * You probably did something wrong if you set this to false.
             */
            success?: boolean;
        }
    }
}
declare namespace Paths {
    namespace GetUserProfile {
        namespace Responses {
            export type $200 = Components.Schemas.Success;
            export type Default = Components.Responses.Error;
        }
    }
}
