import React from 'react';

export interface LanRulerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerSolid(props: LanRulerSolidProps): React.ReactElement;
export default LanRulerSolid;
