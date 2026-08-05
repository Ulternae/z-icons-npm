import React from 'react';

export interface LanArrowsToLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToLineSolid(props: LanArrowsToLineSolidProps): React.ReactElement;
export default LanArrowsToLineSolid;
