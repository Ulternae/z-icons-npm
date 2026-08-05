import React from 'react';

export interface LanSnowplowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowplow(props: LanSnowplowProps): React.ReactElement;
export default LanSnowplow;
