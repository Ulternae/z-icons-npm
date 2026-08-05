import React from 'react';

export interface MinaLetterACircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterACircle(props: MinaLetterACircleProps): React.ReactElement;
export default MinaLetterACircle;
