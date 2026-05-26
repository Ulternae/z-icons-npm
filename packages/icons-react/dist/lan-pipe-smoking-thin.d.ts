import React from 'react';

export interface LanPipeSmokingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSmokingThin: React.FC<LanPipeSmokingThinProps>;
export default LanPipeSmokingThin;
