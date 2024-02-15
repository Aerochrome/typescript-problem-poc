import { MainController } from "@controller/MainController";

export class ApiController
{
    public mc: MainController

    constructor(mc: MainController)
    {
        this.mc = mc
    }
}