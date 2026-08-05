import React from 'react';

export interface LanGlobeStandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeStandRegular(props: LanGlobeStandRegularProps): React.ReactElement;
export default LanGlobeStandRegular;
