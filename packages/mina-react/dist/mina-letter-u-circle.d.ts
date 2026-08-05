import React from 'react';

export interface MinaLetterUCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUCircle(props: MinaLetterUCircleProps): React.ReactElement;
export default MinaLetterUCircle;
