import React from 'react';

export interface LanJointSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJointSolid(props: LanJointSolidProps): React.ReactElement;
export default LanJointSolid;
