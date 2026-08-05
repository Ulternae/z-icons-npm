import React from 'react';

export interface LanHouseSignalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseSignalRegular(props: LanHouseSignalRegularProps): React.ReactElement;
export default LanHouseSignalRegular;
