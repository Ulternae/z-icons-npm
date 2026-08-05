import React from 'react';

export interface LanCakeCandlesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeCandlesRegular(props: LanCakeCandlesRegularProps): React.ReactElement;
export default LanCakeCandlesRegular;
