import React from 'react';

export interface LanJointRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJointRegular(props: LanJointRegularProps): React.ReactElement;
export default LanJointRegular;
