import React from 'react';

export interface LanRacquetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRacquetThin: React.FC<LanRacquetThinProps>;
export default LanRacquetThin;
