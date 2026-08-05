import React from 'react';

export interface LanHouseTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTreeRegular(props: LanHouseTreeRegularProps): React.ReactElement;
export default LanHouseTreeRegular;
