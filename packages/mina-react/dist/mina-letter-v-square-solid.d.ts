import React from 'react';

export interface MinaLetterVSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVSquareSolid(props: MinaLetterVSquareSolidProps): React.ReactElement;
export default MinaLetterVSquareSolid;
