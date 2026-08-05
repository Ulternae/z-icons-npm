import React from 'react';

export interface LanCubesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubesThin(props: LanCubesThinProps): React.ReactElement;
export default LanCubesThin;
