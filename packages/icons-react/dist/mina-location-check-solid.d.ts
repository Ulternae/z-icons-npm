import React from 'react';

export interface MinaLocationCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationCheckSolid: React.FC<MinaLocationCheckSolidProps>;
export default MinaLocationCheckSolid;
