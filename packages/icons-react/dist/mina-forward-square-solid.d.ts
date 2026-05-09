import React from 'react';

export interface MinaForwardSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardSquareSolid: React.FC<MinaForwardSquareSolidProps>;
export default MinaForwardSquareSolid;
