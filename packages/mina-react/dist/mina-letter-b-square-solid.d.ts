import React from 'react';

export interface MinaLetterBSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBSquareSolid(props: MinaLetterBSquareSolidProps): React.ReactElement;
export default MinaLetterBSquareSolid;
