import React from 'react';

export interface LanCompassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassRegular(props: LanCompassRegularProps): React.ReactElement;
export default LanCompassRegular;
