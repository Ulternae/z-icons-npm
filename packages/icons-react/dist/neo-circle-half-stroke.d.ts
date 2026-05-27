import React from 'react';

export interface NeoCircleHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleHalfStroke: React.FC<NeoCircleHalfStrokeProps>;
export default NeoCircleHalfStroke;
