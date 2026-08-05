import React from 'react';

export interface LanMeteorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeteorRegular(props: LanMeteorRegularProps): React.ReactElement;
export default LanMeteorRegular;
