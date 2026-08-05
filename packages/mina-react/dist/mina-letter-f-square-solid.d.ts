import React from 'react';

export interface MinaLetterFSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFSquareSolid(props: MinaLetterFSquareSolidProps): React.ReactElement;
export default MinaLetterFSquareSolid;
