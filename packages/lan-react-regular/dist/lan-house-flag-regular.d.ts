import React from 'react';

export interface LanHouseFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFlagRegular(props: LanHouseFlagRegularProps): React.ReactElement;
export default LanHouseFlagRegular;
