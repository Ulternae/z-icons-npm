import React from 'react';

export interface MinaBatteryEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryEmptySolid(props: MinaBatteryEmptySolidProps): React.ReactElement;
export default MinaBatteryEmptySolid;
