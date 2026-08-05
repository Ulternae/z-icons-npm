import React from 'react';

export interface LanGlobePointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobePointerRegular(props: LanGlobePointerRegularProps): React.ReactElement;
export default LanGlobePointerRegular;
