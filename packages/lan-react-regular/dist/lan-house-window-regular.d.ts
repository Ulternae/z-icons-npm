import React from 'react';

export interface LanHouseWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseWindowRegular(props: LanHouseWindowRegularProps): React.ReactElement;
export default LanHouseWindowRegular;
