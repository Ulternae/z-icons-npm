import React from 'react';

export interface LanDumbbellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumbbellSolid: React.FC<LanDumbbellSolidProps>;
export default LanDumbbellSolid;
