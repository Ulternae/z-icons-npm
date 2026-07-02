import React from 'react';

export interface CoreCircleHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleHalfStroke(props: CoreCircleHalfStrokeProps): React.ReactElement;
export default CoreCircleHalfStroke;
