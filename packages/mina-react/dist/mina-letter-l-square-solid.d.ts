import React from 'react';

export interface MinaLetterLSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLSquareSolid(props: MinaLetterLSquareSolidProps): React.ReactElement;
export default MinaLetterLSquareSolid;
