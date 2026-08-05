import React from 'react';

export interface LanWindowMaximizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMaximizeSolid(props: LanWindowMaximizeSolidProps): React.ReactElement;
export default LanWindowMaximizeSolid;
