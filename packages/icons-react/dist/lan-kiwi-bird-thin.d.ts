import React from 'react';

export interface LanKiwiBirdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiwiBirdThin: React.FC<LanKiwiBirdThinProps>;
export default LanKiwiBirdThin;
