import React from 'react';

export interface LanPumpSoapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpSoapRegular(props: LanPumpSoapRegularProps): React.ReactElement;
export default LanPumpSoapRegular;
