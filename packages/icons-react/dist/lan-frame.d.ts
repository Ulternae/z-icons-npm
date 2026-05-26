import React from 'react';

export interface LanFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrame: React.FC<LanFrameProps>;
export default LanFrame;
