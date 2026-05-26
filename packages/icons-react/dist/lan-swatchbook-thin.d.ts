import React from 'react';

export interface LanSwatchbookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwatchbookThin: React.FC<LanSwatchbookThinProps>;
export default LanSwatchbookThin;
