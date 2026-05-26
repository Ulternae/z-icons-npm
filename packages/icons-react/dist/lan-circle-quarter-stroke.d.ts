import React from 'react';

export interface LanCircleQuarterStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuarterStroke: React.FC<LanCircleQuarterStrokeProps>;
export default LanCircleQuarterStroke;
