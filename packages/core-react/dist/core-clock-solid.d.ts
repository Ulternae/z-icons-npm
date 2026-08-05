import React from 'react';

export interface CoreClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClockSolid(props: CoreClockSolidProps): React.ReactElement;
export default CoreClockSolid;
