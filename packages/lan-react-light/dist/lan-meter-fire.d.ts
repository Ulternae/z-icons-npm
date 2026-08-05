import React from 'react';

export interface LanMeterFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterFire(props: LanMeterFireProps): React.ReactElement;
export default LanMeterFire;
