import React from 'react';

export interface LanSprayCanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprayCan: React.FC<LanSprayCanProps>;
export default LanSprayCan;
