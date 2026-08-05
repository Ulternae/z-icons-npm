import React from 'react';

export interface LanRacquetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRacquetThin(props: LanRacquetThinProps): React.ReactElement;
export default LanRacquetThin;
