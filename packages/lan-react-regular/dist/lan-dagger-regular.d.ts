import React from 'react';

export interface LanDaggerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDaggerRegular(props: LanDaggerRegularProps): React.ReactElement;
export default LanDaggerRegular;
