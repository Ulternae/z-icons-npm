import React from 'react';

export interface LanHoneyPotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoneyPotRegular(props: LanHoneyPotRegularProps): React.ReactElement;
export default LanHoneyPotRegular;
