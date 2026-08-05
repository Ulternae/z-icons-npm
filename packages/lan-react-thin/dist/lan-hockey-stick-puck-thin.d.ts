import React from 'react';

export interface LanHockeyStickPuckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStickPuckThin(props: LanHockeyStickPuckThinProps): React.ReactElement;
export default LanHockeyStickPuckThin;
