import React from 'react';

export interface LanRacquetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRacquetSolid(props: LanRacquetSolidProps): React.ReactElement;
export default LanRacquetSolid;
