import React from 'react';

export interface MinaLetterNSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNSquareSolid(props: MinaLetterNSquareSolidProps): React.ReactElement;
export default MinaLetterNSquareSolid;
