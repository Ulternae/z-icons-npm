import React from 'react';

export interface LanOpenCaptioningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOpenCaptioning: React.FC<LanOpenCaptioningProps>;
export default LanOpenCaptioning;
