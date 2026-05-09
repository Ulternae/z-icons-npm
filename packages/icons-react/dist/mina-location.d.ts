import React from 'react';

export interface MinaLocationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocation: React.FC<MinaLocationProps>;
export default MinaLocation;
