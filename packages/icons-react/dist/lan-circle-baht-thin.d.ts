import React from 'react';

export interface LanCircleBahtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBahtThin: React.FC<LanCircleBahtThinProps>;
export default LanCircleBahtThin;
