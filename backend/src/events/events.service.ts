import { Injectable } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Injectable()
export class EventsService {
  constructor(private readonly eventsGateway: EventsGateway) {}

  notifyAll(event: string, payload: any) {
    this.eventsGateway.emitToAll(event, payload);
  }

  notifyUser(userId: string, event: string, payload: any) {
    this.eventsGateway.emitToRoom(`user:${userId}`, event, payload);
  }
}