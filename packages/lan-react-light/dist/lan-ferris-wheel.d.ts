import React from 'react';

export interface LanFerrisWheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerrisWheel(props: LanFerrisWheelProps): React.ReactElement;
export default LanFerrisWheel;
