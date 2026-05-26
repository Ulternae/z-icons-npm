import React from 'react';

export interface LanTruckDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckDroplet: React.FC<LanTruckDropletProps>;
export default LanTruckDroplet;
