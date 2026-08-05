import React from 'react';

export interface LanGoalNetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGoalNetRegular(props: LanGoalNetRegularProps): React.ReactElement;
export default LanGoalNetRegular;
