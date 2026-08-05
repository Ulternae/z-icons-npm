import React from 'react';

export interface MinaThermometerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThermometer(props: MinaThermometerProps): React.ReactElement;
export default MinaThermometer;
