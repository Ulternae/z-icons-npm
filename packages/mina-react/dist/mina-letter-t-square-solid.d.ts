import React from 'react';

export interface MinaLetterTSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTSquareSolid(props: MinaLetterTSquareSolidProps): React.ReactElement;
export default MinaLetterTSquareSolid;
