import React from 'react';

export interface MinaLetterZSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZSquareSolid(props: MinaLetterZSquareSolidProps): React.ReactElement;
export default MinaLetterZSquareSolid;
