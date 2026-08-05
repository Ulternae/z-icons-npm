import React from 'react';

export interface LanPumpkinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpkin(props: LanPumpkinProps): React.ReactElement;
export default LanPumpkin;
