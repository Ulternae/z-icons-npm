import React from 'react';

export interface LanGoalNetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGoalNet(props: LanGoalNetProps): React.ReactElement;
export default LanGoalNet;
