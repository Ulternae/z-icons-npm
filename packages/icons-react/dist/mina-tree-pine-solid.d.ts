import React from 'react';

export interface MinaTreePineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTreePineSolid: React.FC<MinaTreePineSolidProps>;
export default MinaTreePineSolid;
