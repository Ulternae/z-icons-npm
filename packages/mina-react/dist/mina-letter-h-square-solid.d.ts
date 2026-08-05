import React from 'react';

export interface MinaLetterHSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHSquareSolid(props: MinaLetterHSquareSolidProps): React.ReactElement;
export default MinaLetterHSquareSolid;
