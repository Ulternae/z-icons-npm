import React from 'react';

export interface MinaLetterHCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHCircle(props: MinaLetterHCircleProps): React.ReactElement;
export default MinaLetterHCircle;
