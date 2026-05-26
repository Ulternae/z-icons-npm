import React from 'react';

export interface LanCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCopySolid: React.FC<LanCopySolidProps>;
export default LanCopySolid;
