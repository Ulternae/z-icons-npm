import React from 'react';

export interface LanGoalNetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGoalNetRegular: React.FC<LanGoalNetRegularProps>;
export default LanGoalNetRegular;
