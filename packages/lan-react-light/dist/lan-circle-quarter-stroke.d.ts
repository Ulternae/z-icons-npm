import React from 'react';

export interface LanCircleQuarterStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuarterStroke(props: LanCircleQuarterStrokeProps): React.ReactElement;
export default LanCircleQuarterStroke;
