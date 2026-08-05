import React from 'react';

export interface LanTemperatureLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureLow(props: LanTemperatureLowProps): React.ReactElement;
export default LanTemperatureLow;
