import React from 'react';

export interface LanSquareBahtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBahtThin: React.FC<LanSquareBahtThinProps>;
export default LanSquareBahtThin;
