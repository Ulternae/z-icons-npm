import React from 'react';

export interface LanPumpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPump(props: LanPumpProps): React.ReactElement;
export default LanPump;
