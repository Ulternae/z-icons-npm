import React from 'react';

export interface LanSwatchbookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwatchbook: React.FC<LanSwatchbookProps>;
export default LanSwatchbook;
