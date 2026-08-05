import React from 'react';

export interface LanRaccoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaccoonRegular(props: LanRaccoonRegularProps): React.ReactElement;
export default LanRaccoonRegular;
