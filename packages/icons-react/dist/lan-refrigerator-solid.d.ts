import React from 'react';

export interface LanRefrigeratorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRefrigeratorSolid: React.FC<LanRefrigeratorSolidProps>;
export default LanRefrigeratorSolid;
