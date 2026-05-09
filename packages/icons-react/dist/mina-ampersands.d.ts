import React from 'react';

export interface MinaAmpersandsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmpersands: React.FC<MinaAmpersandsProps>;
export default MinaAmpersands;
