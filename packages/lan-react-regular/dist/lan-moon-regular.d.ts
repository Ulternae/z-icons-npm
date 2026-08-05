import React from 'react';

export interface LanMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonRegular(props: LanMoonRegularProps): React.ReactElement;
export default LanMoonRegular;
