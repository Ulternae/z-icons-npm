import React from 'react';

export interface NeoBatteryEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryEmpty(props: NeoBatteryEmptyProps): React.ReactElement;
export default NeoBatteryEmpty;
