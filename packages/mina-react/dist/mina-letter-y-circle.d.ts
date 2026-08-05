import React from 'react';

export interface MinaLetterYCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYCircle(props: MinaLetterYCircleProps): React.ReactElement;
export default MinaLetterYCircle;
