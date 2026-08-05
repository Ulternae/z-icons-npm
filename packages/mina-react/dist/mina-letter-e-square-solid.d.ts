import React from 'react';

export interface MinaLetterESquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterESquareSolid(props: MinaLetterESquareSolidProps): React.ReactElement;
export default MinaLetterESquareSolid;
