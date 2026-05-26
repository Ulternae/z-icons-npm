import React from 'react';

export interface LanMarsStrokeVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeVThin: React.FC<LanMarsStrokeVThinProps>;
export default LanMarsStrokeVThin;
