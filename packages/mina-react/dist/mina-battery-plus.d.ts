import React from 'react';

export interface MinaBatteryPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryPlus(props: MinaBatteryPlusProps): React.ReactElement;
export default MinaBatteryPlus;
