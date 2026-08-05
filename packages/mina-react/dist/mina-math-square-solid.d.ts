import React from 'react';

export interface MinaMathSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMathSquareSolid(props: MinaMathSquareSolidProps): React.ReactElement;
export default MinaMathSquareSolid;
