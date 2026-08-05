import React from 'react';

export interface MinaLetterJSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJSquareSolid(props: MinaLetterJSquareSolidProps): React.ReactElement;
export default MinaLetterJSquareSolid;
