import React from 'react';

export interface MinaClockTwelveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockTwelveSolid(props: MinaClockTwelveSolidProps): React.ReactElement;
export default MinaClockTwelveSolid;
