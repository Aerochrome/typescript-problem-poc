import { ApiController } from 'src/controller/ApiController'

export class MainController
{
    public apiController: ApiController    

    public constructor() {
        // Create Handlers
        this.apiController = new ApiController(this)
    }

    public async init() {
        console.log('Initializing Application ...')
    }
}