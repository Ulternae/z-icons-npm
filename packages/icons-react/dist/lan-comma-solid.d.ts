import React from 'react';

export interface LanCommaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommaSolid: React.FC<LanCommaSolidProps>;
export default LanCommaSolid;
