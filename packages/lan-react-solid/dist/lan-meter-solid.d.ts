import React from 'react';

export interface LanMeterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterSolid(props: LanMeterSolidProps): React.ReactElement;
export default LanMeterSolid;
