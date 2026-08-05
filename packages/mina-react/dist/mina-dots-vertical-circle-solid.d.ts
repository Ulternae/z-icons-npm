import React from 'react';

export interface MinaDotsVerticalCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalCircleSolid(props: MinaDotsVerticalCircleSolidProps): React.ReactElement;
export default MinaDotsVerticalCircleSolid;
