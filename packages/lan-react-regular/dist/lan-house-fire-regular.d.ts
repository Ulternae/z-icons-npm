import React from 'react';

export interface LanHouseFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFireRegular(props: LanHouseFireRegularProps): React.ReactElement;
export default LanHouseFireRegular;
