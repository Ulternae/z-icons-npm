import React from 'react';

export interface LanWindowFrameRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrameRegular: React.FC<LanWindowFrameRegularProps>;
export default LanWindowFrameRegular;
