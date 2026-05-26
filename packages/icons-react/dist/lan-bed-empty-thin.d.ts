import React from 'react';

export interface LanBedEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedEmptyThin: React.FC<LanBedEmptyThinProps>;
export default LanBedEmptyThin;
