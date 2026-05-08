import React from 'react';

export interface MinaAmpersandsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmpersandsSolid: React.FC<MinaAmpersandsSolidProps>;
export default MinaAmpersandsSolid;
