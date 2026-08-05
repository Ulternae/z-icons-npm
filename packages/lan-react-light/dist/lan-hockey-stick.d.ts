import React from 'react';

export interface LanHockeyStickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStick(props: LanHockeyStickProps): React.ReactElement;
export default LanHockeyStick;
