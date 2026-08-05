import React from 'react';

export interface MinaBatteryChargingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryChargingSolid(props: MinaBatteryChargingSolidProps): React.ReactElement;
export default MinaBatteryChargingSolid;
