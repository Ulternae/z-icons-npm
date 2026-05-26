import React from 'react';

export interface LanGoalNetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGoalNetThin: React.FC<LanGoalNetThinProps>;
export default LanGoalNetThin;
