import React from 'react';

export interface LanHouseFloodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFloodThin(props: LanHouseFloodThinProps): React.ReactElement;
export default LanHouseFloodThin;
