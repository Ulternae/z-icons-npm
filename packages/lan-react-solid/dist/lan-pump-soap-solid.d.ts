import React from 'react';

export interface LanPumpSoapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpSoapSolid(props: LanPumpSoapSolidProps): React.ReactElement;
export default LanPumpSoapSolid;
