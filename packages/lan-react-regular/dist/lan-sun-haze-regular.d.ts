import React from 'react';

export interface LanSunHazeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunHazeRegular(props: LanSunHazeRegularProps): React.ReactElement;
export default LanSunHazeRegular;
