import React from 'react';

export interface LanWindowFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrame: React.FC<LanWindowFrameProps>;
export default LanWindowFrame;
