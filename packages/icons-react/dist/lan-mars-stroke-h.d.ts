import React from 'react';

export interface LanMarsStrokeHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeH: React.FC<LanMarsStrokeHProps>;
export default LanMarsStrokeH;
