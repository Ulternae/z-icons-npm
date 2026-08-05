import React from 'react';

export interface MinaSadCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSadCircleSolid(props: MinaSadCircleSolidProps): React.ReactElement;
export default MinaSadCircleSolid;
