import React from 'react';

export interface LanWaterTempSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaterTempSolid(props: LanWaterTempSolidProps): React.ReactElement;
export default LanWaterTempSolid;
