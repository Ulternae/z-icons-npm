import React from 'react';

export interface LanHockeySticksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeySticksThin(props: LanHockeySticksThinProps): React.ReactElement;
export default LanHockeySticksThin;
