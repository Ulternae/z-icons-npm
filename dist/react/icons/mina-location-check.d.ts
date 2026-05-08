import React from 'react';

export interface MinaLocationCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationCheck: React.FC<MinaLocationCheckProps>;
export default MinaLocationCheck;
