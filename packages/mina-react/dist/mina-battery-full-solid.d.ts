import React from 'react';

export interface MinaBatteryFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryFullSolid(props: MinaBatteryFullSolidProps): React.ReactElement;
export default MinaBatteryFullSolid;
