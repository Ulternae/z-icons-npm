import React from 'react';

export interface MinaBatteryFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryFull(props: MinaBatteryFullProps): React.ReactElement;
export default MinaBatteryFull;
