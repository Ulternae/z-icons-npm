import React from 'react';

export interface LanRulerHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerHorizontalSolid(props: LanRulerHorizontalSolidProps): React.ReactElement;
export default LanRulerHorizontalSolid;
