import React from 'react';

export interface MinaLetterGCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGCircle(props: MinaLetterGCircleProps): React.ReactElement;
export default MinaLetterGCircle;
