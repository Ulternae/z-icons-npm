import React from 'react';

export interface MinaDangerCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerCircleSolid(props: MinaDangerCircleSolidProps): React.ReactElement;
export default MinaDangerCircleSolid;
