import React from 'react';

export interface CoreWheelchairMoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWheelchairMoveSolid: React.FC<CoreWheelchairMoveSolidProps>;
export default CoreWheelchairMoveSolid;
