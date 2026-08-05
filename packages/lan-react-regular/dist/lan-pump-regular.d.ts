import React from 'react';

export interface LanPumpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpRegular(props: LanPumpRegularProps): React.ReactElement;
export default LanPumpRegular;
