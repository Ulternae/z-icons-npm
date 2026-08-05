import React from 'react';

export interface LanSunDustRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunDustRegular(props: LanSunDustRegularProps): React.ReactElement;
export default LanSunDustRegular;
