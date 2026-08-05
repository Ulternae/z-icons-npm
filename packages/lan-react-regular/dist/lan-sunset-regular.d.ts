import React from 'react';

export interface LanSunsetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunsetRegular(props: LanSunsetRegularProps): React.ReactElement;
export default LanSunsetRegular;
