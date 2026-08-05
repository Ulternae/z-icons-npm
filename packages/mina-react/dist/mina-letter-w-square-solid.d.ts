import React from 'react';

export interface MinaLetterWSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWSquareSolid(props: MinaLetterWSquareSolidProps): React.ReactElement;
export default MinaLetterWSquareSolid;
