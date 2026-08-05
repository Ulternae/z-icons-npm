import React from 'react';

export interface LanRacquetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRacquetRegular(props: LanRacquetRegularProps): React.ReactElement;
export default LanRacquetRegular;
