import React from 'react';

export interface LanSnowplowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowplowRegular(props: LanSnowplowRegularProps): React.ReactElement;
export default LanSnowplowRegular;
