import React from 'react';

export interface LanIndustrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndustrySolid: React.FC<LanIndustrySolidProps>;
export default LanIndustrySolid;
