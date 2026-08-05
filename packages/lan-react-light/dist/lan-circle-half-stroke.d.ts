import React from 'react';

export interface LanCircleHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfStroke(props: LanCircleHalfStrokeProps): React.ReactElement;
export default LanCircleHalfStroke;
