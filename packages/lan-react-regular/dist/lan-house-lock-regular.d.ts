import React from 'react';

export interface LanHouseLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLockRegular(props: LanHouseLockRegularProps): React.ReactElement;
export default LanHouseLockRegular;
