import React from 'react';

export interface LanOpenCaptioningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOpenCaptioningRegular: React.FC<LanOpenCaptioningRegularProps>;
export default LanOpenCaptioningRegular;
