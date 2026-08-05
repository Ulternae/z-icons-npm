import React from 'react';

export interface MinaBatteryCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryCheckSolid(props: MinaBatteryCheckSolidProps): React.ReactElement;
export default MinaBatteryCheckSolid;
