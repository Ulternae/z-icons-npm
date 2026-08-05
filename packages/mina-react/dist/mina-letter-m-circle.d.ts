import React from 'react';

export interface MinaLetterMCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMCircle(props: MinaLetterMCircleProps): React.ReactElement;
export default MinaLetterMCircle;
