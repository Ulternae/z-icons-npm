import React from 'react';

export interface LanGlobeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeRegular(props: LanGlobeRegularProps): React.ReactElement;
export default LanGlobeRegular;
