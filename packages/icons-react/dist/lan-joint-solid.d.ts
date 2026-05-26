import React from 'react';

export interface LanJointSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJointSolid: React.FC<LanJointSolidProps>;
export default LanJointSolid;
