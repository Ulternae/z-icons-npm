import React from 'react';

export interface LanGoalNetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGoalNetSolid(props: LanGoalNetSolidProps): React.ReactElement;
export default LanGoalNetSolid;
