import React from 'react';

export interface LanPowerOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPowerOff(props: LanPowerOffProps): React.ReactElement;
export default LanPowerOff;
