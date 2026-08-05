import React from 'react';

export interface MinaBatteryMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryMinusSolid(props: MinaBatteryMinusSolidProps): React.ReactElement;
export default MinaBatteryMinusSolid;
