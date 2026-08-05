import React from 'react';

export interface LanMeterDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterDroplet(props: LanMeterDropletProps): React.ReactElement;
export default LanMeterDroplet;
