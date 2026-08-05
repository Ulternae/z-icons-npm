import React from 'react';

export interface MinaLetterFCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFCircle(props: MinaLetterFCircleProps): React.ReactElement;
export default MinaLetterFCircle;
