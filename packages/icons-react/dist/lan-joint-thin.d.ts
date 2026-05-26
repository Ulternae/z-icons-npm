import React from 'react';

export interface LanJointThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJointThin: React.FC<LanJointThinProps>;
export default LanJointThin;
