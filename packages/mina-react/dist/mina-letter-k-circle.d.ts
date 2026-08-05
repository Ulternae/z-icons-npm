import React from 'react';

export interface MinaLetterKCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKCircle(props: MinaLetterKCircleProps): React.ReactElement;
export default MinaLetterKCircle;
