import React from 'react';

export interface LanHockeyStickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStickThin(props: LanHockeyStickThinProps): React.ReactElement;
export default LanHockeyStickThin;
