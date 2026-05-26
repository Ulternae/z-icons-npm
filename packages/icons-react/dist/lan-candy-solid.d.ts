import React from 'react';

export interface LanCandySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandySolid: React.FC<LanCandySolidProps>;
export default LanCandySolid;
