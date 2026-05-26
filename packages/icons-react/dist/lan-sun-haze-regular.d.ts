import React from 'react';

export interface LanSunHazeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunHazeRegular: React.FC<LanSunHazeRegularProps>;
export default LanSunHazeRegular;
