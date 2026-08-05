import React from 'react';

export interface MinaLetterASquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterASquareSolid(props: MinaLetterASquareSolidProps): React.ReactElement;
export default MinaLetterASquareSolid;
