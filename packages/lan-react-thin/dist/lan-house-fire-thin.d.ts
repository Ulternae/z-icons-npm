import React from 'react';

export interface LanHouseFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFireThin(props: LanHouseFireThinProps): React.ReactElement;
export default LanHouseFireThin;
