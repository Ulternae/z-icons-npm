import React from 'react';

export interface MinaDotsVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalSolid(props: MinaDotsVerticalSolidProps): React.ReactElement;
export default MinaDotsVerticalSolid;
