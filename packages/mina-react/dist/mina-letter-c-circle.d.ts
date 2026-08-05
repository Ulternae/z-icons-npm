import React from 'react';

export interface MinaLetterCCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCCircle(props: MinaLetterCCircleProps): React.ReactElement;
export default MinaLetterCCircle;
