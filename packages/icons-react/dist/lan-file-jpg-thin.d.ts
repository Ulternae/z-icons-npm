import React from 'react';

export interface LanFileJpgThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJpgThin: React.FC<LanFileJpgThinProps>;
export default LanFileJpgThin;
