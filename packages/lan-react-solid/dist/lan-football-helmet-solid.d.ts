import React from 'react';

export interface LanFootballHelmetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootballHelmetSolid(props: LanFootballHelmetSolidProps): React.ReactElement;
export default LanFootballHelmetSolid;
