import React from 'react';

export interface LanSunHazeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunHaze: React.FC<LanSunHazeProps>;
export default LanSunHaze;
