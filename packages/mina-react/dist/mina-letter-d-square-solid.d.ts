import React from 'react';

export interface MinaLetterDSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDSquareSolid(props: MinaLetterDSquareSolidProps): React.ReactElement;
export default MinaLetterDSquareSolid;
