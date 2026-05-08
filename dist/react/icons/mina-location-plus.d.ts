import React from 'react';

export interface MinaLocationPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationPlus: React.FC<MinaLocationPlusProps>;
export default MinaLocationPlus;
