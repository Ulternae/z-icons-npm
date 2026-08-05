import React from 'react';

export interface LanPumpSoapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpSoap(props: LanPumpSoapProps): React.ReactElement;
export default LanPumpSoap;
