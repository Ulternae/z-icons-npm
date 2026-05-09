import React from 'react';

export interface MinaLocationXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationX: React.FC<MinaLocationXProps>;
export default MinaLocationX;
