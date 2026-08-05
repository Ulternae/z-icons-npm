import React from 'react';

export interface LanVestRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVestRegular(props: LanVestRegularProps): React.ReactElement;
export default LanVestRegular;
