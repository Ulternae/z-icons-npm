import React from 'react';

export interface LanFileImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileImageThin: React.FC<LanFileImageThinProps>;
export default LanFileImageThin;
