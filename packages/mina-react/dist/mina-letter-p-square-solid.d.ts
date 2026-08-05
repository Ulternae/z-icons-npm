import React from 'react';

export interface MinaLetterPSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPSquareSolid(props: MinaLetterPSquareSolidProps): React.ReactElement;
export default MinaLetterPSquareSolid;
