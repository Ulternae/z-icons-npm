import React from 'react';

export interface LanBaseballBatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBatThin: React.FC<LanBaseballBatThinProps>;
export default LanBaseballBatThin;
