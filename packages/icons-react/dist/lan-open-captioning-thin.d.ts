import React from 'react';

export interface LanOpenCaptioningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOpenCaptioningThin: React.FC<LanOpenCaptioningThinProps>;
export default LanOpenCaptioningThin;
