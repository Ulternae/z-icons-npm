import React from 'react';

export interface LanOilTempSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilTempSolid(props: LanOilTempSolidProps): React.ReactElement;
export default LanOilTempSolid;
