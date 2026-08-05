import React from 'react';

export interface MinaLetterMSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMSquareSolid(props: MinaLetterMSquareSolidProps): React.ReactElement;
export default MinaLetterMSquareSolid;
