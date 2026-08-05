import React from 'react';

export interface LanArrowsMinimizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsMinimizeSolid(props: LanArrowsMinimizeSolidProps): React.ReactElement;
export default LanArrowsMinimizeSolid;
