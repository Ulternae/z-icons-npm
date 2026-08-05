import React from 'react';

export interface MinaDotsVerticalSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalSquareSolid(props: MinaDotsVerticalSquareSolidProps): React.ReactElement;
export default MinaDotsVerticalSquareSolid;
