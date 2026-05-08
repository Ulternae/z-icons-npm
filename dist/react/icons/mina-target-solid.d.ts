import React from 'react';

export interface MinaTargetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTargetSolid: React.FC<MinaTargetSolidProps>;
export default MinaTargetSolid;
