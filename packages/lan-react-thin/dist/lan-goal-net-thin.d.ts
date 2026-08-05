import React from 'react';

export interface LanGoalNetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGoalNetThin(props: LanGoalNetThinProps): React.ReactElement;
export default LanGoalNetThin;
