import React from 'react';

export interface LanWindowMinimizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowMinimizeSolid(props: LanWindowMinimizeSolidProps): React.ReactElement;
export default LanWindowMinimizeSolid;
