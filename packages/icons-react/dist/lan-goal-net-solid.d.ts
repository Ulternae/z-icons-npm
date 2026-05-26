import React from 'react';

export interface LanGoalNetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGoalNetSolid: React.FC<LanGoalNetSolidProps>;
export default LanGoalNetSolid;
