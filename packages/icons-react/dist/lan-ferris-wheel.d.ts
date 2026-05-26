import React from 'react';

export interface LanFerrisWheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerrisWheel: React.FC<LanFerrisWheelProps>;
export default LanFerrisWheel;
