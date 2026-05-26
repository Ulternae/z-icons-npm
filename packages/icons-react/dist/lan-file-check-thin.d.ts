import React from 'react';

export interface LanFileCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCheckThin: React.FC<LanFileCheckThinProps>;
export default LanFileCheckThin;
