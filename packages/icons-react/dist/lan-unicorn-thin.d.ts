import React from 'react';

export interface LanUnicornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicornThin: React.FC<LanUnicornThinProps>;
export default LanUnicornThin;
