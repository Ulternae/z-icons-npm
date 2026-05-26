import React from 'react';

export interface LanFrameRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrameRegular: React.FC<LanFrameRegularProps>;
export default LanFrameRegular;
