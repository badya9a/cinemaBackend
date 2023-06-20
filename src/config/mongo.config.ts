import { TypegooseModuleOptions } from '../typegoose-options.interface'
import { ConfigService } from '@nestjs/config'

const options = {}

export const getMongoConfig = async (
	configService: ConfigService
): Promise<TypegooseModuleOptions> => ({
	uri: configService.get('MONGO_URI'),
	...options,
})
