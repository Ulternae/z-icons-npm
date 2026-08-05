import React from 'react';

export interface MinaLetterICircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterICircle(props: MinaLetterICircleProps): React.ReactElement;
export default MinaLetterICircle;
