import React from 'react';

export interface MinaMaximizeOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMaximizeOneSolid: React.FC<MinaMaximizeOneSolidProps>;
export default MinaMaximizeOneSolid;
