import React from 'react';

export interface LanJointProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJoint(props: LanJointProps): React.ReactElement;
export default LanJoint;
