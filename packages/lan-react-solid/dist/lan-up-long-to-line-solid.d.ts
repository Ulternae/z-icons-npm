import React from 'react';

export interface LanUpLongToLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpLongToLineSolid(props: LanUpLongToLineSolidProps): React.ReactElement;
export default LanUpLongToLineSolid;
