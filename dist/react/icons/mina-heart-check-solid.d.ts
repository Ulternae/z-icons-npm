import React from 'react';

export interface MinaHeartCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartCheckSolid: React.FC<MinaHeartCheckSolidProps>;
export default MinaHeartCheckSolid;
