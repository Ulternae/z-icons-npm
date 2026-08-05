import React from 'react';

export interface LanUpDownLeftRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpDownLeftRightSolid(props: LanUpDownLeftRightSolidProps): React.ReactElement;
export default LanUpDownLeftRightSolid;
