import React from 'react';

export interface LanMeterDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterDropletSolid(props: LanMeterDropletSolidProps): React.ReactElement;
export default LanMeterDropletSolid;
