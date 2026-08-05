import React from 'react';

export interface LanMeterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeter(props: LanMeterProps): React.ReactElement;
export default LanMeter;
