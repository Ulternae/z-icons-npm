import React from 'react';

export interface LanCubesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubesSolid(props: LanCubesSolidProps): React.ReactElement;
export default LanCubesSolid;
