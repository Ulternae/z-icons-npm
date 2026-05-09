import React from 'react';

export interface MinaHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartSolid: React.FC<MinaHeartSolidProps>;
export default MinaHeartSolid;
