import React from 'react';

export interface LanMeterDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterDroplet: React.FC<LanMeterDropletProps>;
export default LanMeterDroplet;
