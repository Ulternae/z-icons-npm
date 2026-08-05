import React from 'react';

export interface LanSunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunRegular(props: LanSunRegularProps): React.ReactElement;
export default LanSunRegular;
