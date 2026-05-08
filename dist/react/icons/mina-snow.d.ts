import React from 'react';

export interface MinaSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSnow: React.FC<MinaSnowProps>;
export default MinaSnow;
