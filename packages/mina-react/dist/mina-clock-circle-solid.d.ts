import React from 'react';

export interface MinaClockCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockCircleSolid(props: MinaClockCircleSolidProps): React.ReactElement;
export default MinaClockCircleSolid;
