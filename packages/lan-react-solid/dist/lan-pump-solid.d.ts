import React from 'react';

export interface LanPumpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpSolid(props: LanPumpSolidProps): React.ReactElement;
export default LanPumpSolid;
