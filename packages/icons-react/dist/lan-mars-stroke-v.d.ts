import React from 'react';

export interface LanMarsStrokeVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeV: React.FC<LanMarsStrokeVProps>;
export default LanMarsStrokeV;
