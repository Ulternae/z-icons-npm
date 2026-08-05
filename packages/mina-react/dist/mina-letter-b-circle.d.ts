import React from 'react';

export interface MinaLetterBCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBCircle(props: MinaLetterBCircleProps): React.ReactElement;
export default MinaLetterBCircle;
