import React from 'react';

export interface LanMopedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMopedRegular(props: LanMopedRegularProps): React.ReactElement;
export default LanMopedRegular;
