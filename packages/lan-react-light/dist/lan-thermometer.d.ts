import React from 'react';

export interface LanThermometerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThermometer(props: LanThermometerProps): React.ReactElement;
export default LanThermometer;
