import React from 'react';

export interface LanStadiumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStadiumThin: React.FC<LanStadiumThinProps>;
export default LanStadiumThin;
