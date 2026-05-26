import React from 'react';

export interface LanMarsStrokeHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeHThin: React.FC<LanMarsStrokeHThinProps>;
export default LanMarsStrokeHThin;
