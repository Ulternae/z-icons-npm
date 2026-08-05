import React from 'react';

export interface MinaBatteryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBatteryEmpty(props: MinaBatteryEmptyProps): React.ReactElement;
export default MinaBatteryEmpty;
