import React from 'react';

export interface MinaHeartDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartDotSolid: React.FC<MinaHeartDotSolidProps>;
export default MinaHeartDotSolid;
