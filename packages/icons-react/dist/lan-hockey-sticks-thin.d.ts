import React from 'react';

export interface LanHockeySticksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeySticksThin: React.FC<LanHockeySticksThinProps>;
export default LanHockeySticksThin;
