import React from 'react';

export interface LanTruckDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckDroplet(props: LanTruckDropletProps): React.ReactElement;
export default LanTruckDroplet;
