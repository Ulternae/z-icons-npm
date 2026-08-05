import React from 'react';

export interface MinaYenSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenSquareSolid(props: MinaYenSquareSolidProps): React.ReactElement;
export default MinaYenSquareSolid;
