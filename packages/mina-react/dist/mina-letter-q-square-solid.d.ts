import React from 'react';

export interface MinaLetterQSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQSquareSolid(props: MinaLetterQSquareSolidProps): React.ReactElement;
export default MinaLetterQSquareSolid;
