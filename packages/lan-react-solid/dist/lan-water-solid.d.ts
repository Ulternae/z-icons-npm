import React from 'react';

export interface LanWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaterSolid(props: LanWaterSolidProps): React.ReactElement;
export default LanWaterSolid;
