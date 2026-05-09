import React from 'react';

export interface MinaFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlagSolid: React.FC<MinaFlagSolidProps>;
export default MinaFlagSolid;
