import React from 'react';

export interface LanTemperatureLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureLowSolid(props: LanTemperatureLowSolidProps): React.ReactElement;
export default LanTemperatureLowSolid;
