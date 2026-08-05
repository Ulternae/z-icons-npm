import React from 'react';

export interface MinaLetterKSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKSquareSolid(props: MinaLetterKSquareSolidProps): React.ReactElement;
export default MinaLetterKSquareSolid;
