import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Controller()
export class UsersMicroserviceController {
    @MessagePattern({ cmd: 'createUser' })
    createUser(@Payload() data:CreateUserDto) {
        console.log(data);
        return { message: 'User created successfully', data };
        
    }
    @EventPattern('PaymentCreated')
    paymentCreated(@Payload() data: any) {
        console.log('Payment Created:', data);
        return { message: 'Payment processed successfully', data };
    }
}