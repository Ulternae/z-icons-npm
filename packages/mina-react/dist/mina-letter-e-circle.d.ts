import React from 'react';

export interface MinaLetterECircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterECircle(props: MinaLetterECircleProps): React.ReactElement;
export default MinaLetterECircle;
