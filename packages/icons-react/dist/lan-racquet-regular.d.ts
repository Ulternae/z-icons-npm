import React from 'react';

export interface LanRacquetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRacquetRegular: React.FC<LanRacquetRegularProps>;
export default LanRacquetRegular;
