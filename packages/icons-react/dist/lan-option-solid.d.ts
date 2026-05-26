import React from 'react';

export interface LanOptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOptionSolid: React.FC<LanOptionSolidProps>;
export default LanOptionSolid;
