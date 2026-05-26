import React from 'react';

export interface LanMarsStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStroke: React.FC<LanMarsStrokeProps>;
export default LanMarsStroke;
