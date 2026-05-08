import React from 'react';

export interface MinaCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckSolid: React.FC<MinaCheckSolidProps>;
export default MinaCheckSolid;
