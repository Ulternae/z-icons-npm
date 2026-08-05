import React from 'react';

export interface MinaBatteryXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryXSolid(props: MinaBatteryXSolidProps): React.ReactElement;
export default MinaBatteryXSolid;
