import React from 'react';

export interface MinaThermometerSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThermometerSun(props: MinaThermometerSunProps): React.ReactElement;
export default MinaThermometerSun;
