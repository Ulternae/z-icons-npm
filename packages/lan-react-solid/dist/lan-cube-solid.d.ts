import React from 'react';

export interface LanCubeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubeSolid(props: LanCubeSolidProps): React.ReactElement;
export default LanCubeSolid;
