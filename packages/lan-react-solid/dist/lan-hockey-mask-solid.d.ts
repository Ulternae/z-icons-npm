import React from 'react';

export interface LanHockeyMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyMaskSolid(props: LanHockeyMaskSolidProps): React.ReactElement;
export default LanHockeyMaskSolid;
