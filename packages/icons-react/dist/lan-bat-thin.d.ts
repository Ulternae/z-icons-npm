import React from 'react';

export interface LanBatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatThin: React.FC<LanBatThinProps>;
export default LanBatThin;
