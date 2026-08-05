import React from 'react';

export interface LanPumpSoapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpSoapThin(props: LanPumpSoapThinProps): React.ReactElement;
export default LanPumpSoapThin;
