import React from 'react';

export interface LanFlyingDiscRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlyingDiscRegular(props: LanFlyingDiscRegularProps): React.ReactElement;
export default LanFlyingDiscRegular;
