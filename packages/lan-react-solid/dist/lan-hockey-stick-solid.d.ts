import React from 'react';

export interface LanHockeyStickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStickSolid(props: LanHockeyStickSolidProps): React.ReactElement;
export default LanHockeyStickSolid;
