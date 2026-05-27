import React from 'react';

export interface CoreClosedCaptioningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClosedCaptioning: React.FC<CoreClosedCaptioningProps>;
export default CoreClosedCaptioning;
