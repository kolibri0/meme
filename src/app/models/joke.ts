export namespace Jokes{
    
    export interface joke{
        setup: string;
        delivery: string;
    }

    export interface jokes{
        amount: number;
        error: boolean;
        jokes: joke[]
    }
}