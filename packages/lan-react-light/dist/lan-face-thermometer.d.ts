import React from 'react';

export interface LanFaceThermometerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceThermometer(props: LanFaceThermometerProps): React.ReactElement;
export default LanFaceThermometer;
