import React from 'react';

export interface MinaSelectMultipleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSelectMultipleSolid: React.FC<MinaSelectMultipleSolidProps>;
export default MinaSelectMultipleSolid;
