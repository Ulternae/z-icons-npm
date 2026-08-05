import React from 'react';

export interface NeoCircleHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleHalfStroke(props: NeoCircleHalfStrokeProps): React.ReactElement;
export default NeoCircleHalfStroke;
