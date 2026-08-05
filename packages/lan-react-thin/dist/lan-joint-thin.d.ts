import React from 'react';

export interface LanJointThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJointThin(props: LanJointThinProps): React.ReactElement;
export default LanJointThin;
