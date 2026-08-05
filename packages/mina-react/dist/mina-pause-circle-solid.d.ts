import React from 'react';

export interface MinaPauseCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseCircleSolid(props: MinaPauseCircleSolidProps): React.ReactElement;
export default MinaPauseCircleSolid;
