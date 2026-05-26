import React from 'react';

export interface LanGoalNetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGoalNet: React.FC<LanGoalNetProps>;
export default LanGoalNet;
