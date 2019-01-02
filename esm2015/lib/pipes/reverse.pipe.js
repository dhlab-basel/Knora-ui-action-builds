import { Pipe } from '@angular/core';
export class ReversePipe {
    /**
     * TODO: add description
     */
    transform(value) {
        if (value) {
            return value.slice().reverse();
        }
    }
}
ReversePipe.decorators = [
    { type: Pipe, args: [{
                name: 'kuiReverse'
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9yZXZlcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTTtJQUVGOztPQUVHO0lBRUgsU0FBUyxDQUFDLEtBQVU7UUFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7OztZQWJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsWUFBWTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdrdWlSZXZlcnNlJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXZlcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogYWRkIGRlc2NyaXB0aW9uXG4gICAgICovXG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=