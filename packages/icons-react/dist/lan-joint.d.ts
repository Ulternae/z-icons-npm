import React from 'react';

export interface LanJointProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJoint: React.FC<LanJointProps>;
export default LanJoint;
