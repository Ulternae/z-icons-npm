import React from 'react';

export interface LanHockeySticksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeySticksSolid(props: LanHockeySticksSolidProps): React.ReactElement;
export default LanHockeySticksSolid;
