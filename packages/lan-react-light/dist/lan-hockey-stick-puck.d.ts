import React from 'react';

export interface LanHockeyStickPuckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStickPuck(props: LanHockeyStickPuckProps): React.ReactElement;
export default LanHockeyStickPuck;
