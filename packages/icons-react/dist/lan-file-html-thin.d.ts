import React from 'react';

export interface LanFileHtmlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHtmlThin: React.FC<LanFileHtmlThinProps>;
export default LanFileHtmlThin;
