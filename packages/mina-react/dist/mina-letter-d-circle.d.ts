import React from 'react';

export interface MinaLetterDCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDCircle(props: MinaLetterDCircleProps): React.ReactElement;
export default MinaLetterDCircle;
