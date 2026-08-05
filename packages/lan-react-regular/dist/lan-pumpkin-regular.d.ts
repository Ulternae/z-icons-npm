import React from 'react';

export interface LanPumpkinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpkinRegular(props: LanPumpkinRegularProps): React.ReactElement;
export default LanPumpkinRegular;
