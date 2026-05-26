import React from 'react';

export interface LanClosedCaptioningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClosedCaptioning: React.FC<LanClosedCaptioningProps>;
export default LanClosedCaptioning;
