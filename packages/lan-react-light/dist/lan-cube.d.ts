import React from 'react';

export interface LanCubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCube(props: LanCubeProps): React.ReactElement;
export default LanCube;
