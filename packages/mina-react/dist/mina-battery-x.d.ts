import React from 'react';

export interface MinaBatteryXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryX(props: MinaBatteryXProps): React.ReactElement;
export default MinaBatteryX;
