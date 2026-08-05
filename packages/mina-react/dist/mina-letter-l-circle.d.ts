import React from 'react';

export interface MinaLetterLCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLCircle(props: MinaLetterLCircleProps): React.ReactElement;
export default MinaLetterLCircle;
