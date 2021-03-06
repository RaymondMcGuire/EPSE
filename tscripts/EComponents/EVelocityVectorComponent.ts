/* =========================================================================
 *
 *  EVelocityVectorComponent.ts
 *  
 * 
 * ========================================================================= */
/// <reference path="../ECS/Component.ts" />
module EPSE {

    export class EVelocityVectorComponent extends ECS.Component {
        velocityVector:any;
        constructor() {
            super("velocityvector");

            this.velocityVector = {
                enabled: false,    
                visible: false,  
                color: null,      
                scale: 0.5,         
            };
        }
    }
}