import React from 'react';

export interface LanWindowFrameOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrameOpenRegular: React.FC<LanWindowFrameOpenRegularProps>;
export default LanWindowFrameOpenRegular;
