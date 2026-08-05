import React from 'react';

export interface MinaLetterSSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSSquareSolid(props: MinaLetterSSquareSolidProps): React.ReactElement;
export default MinaLetterSSquareSolid;
