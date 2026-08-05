import React from 'react';

export interface MinaBatteryPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryPlusSolid(props: MinaBatteryPlusSolidProps): React.ReactElement;
export default MinaBatteryPlusSolid;
