import { MainController } from "src/controller/MainController";

export class ApiController
{
    public mc: MainController

    constructor(mc: MainController)
    {
        this.mc = mc
    }
}