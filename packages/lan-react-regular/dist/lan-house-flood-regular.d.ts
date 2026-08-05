import React from 'react';

export interface LanHouseFloodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFloodRegular(props: LanHouseFloodRegularProps): React.ReactElement;
export default LanHouseFloodRegular;
