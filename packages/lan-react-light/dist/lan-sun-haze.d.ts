import React from 'react';

export interface LanSunHazeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunHaze(props: LanSunHazeProps): React.ReactElement;
export default LanSunHaze;
