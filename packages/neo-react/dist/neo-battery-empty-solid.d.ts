import React from 'react';

export interface NeoBatteryEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBatteryEmptySolid(props: NeoBatteryEmptySolidProps): React.ReactElement;
export default NeoBatteryEmptySolid;
