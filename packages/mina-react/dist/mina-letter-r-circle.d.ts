import React from 'react';

export interface MinaLetterRCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRCircle(props: MinaLetterRCircleProps): React.ReactElement;
export default MinaLetterRCircle;
