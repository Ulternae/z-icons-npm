import React from 'react';

export interface LanHouseFloodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFlood(props: LanHouseFloodProps): React.ReactElement;
export default LanHouseFlood;
