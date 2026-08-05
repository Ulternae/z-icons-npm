import React from 'react';

export interface MinaLetterNCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNCircle(props: MinaLetterNCircleProps): React.ReactElement;
export default MinaLetterNCircle;
