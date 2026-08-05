import React from 'react';

export interface MinaLetterYSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYSquareSolid(props: MinaLetterYSquareSolidProps): React.ReactElement;
export default MinaLetterYSquareSolid;
