import React from 'react';

export interface LanSmokingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmokingThin: React.FC<LanSmokingThinProps>;
export default LanSmokingThin;
