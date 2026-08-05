import React from 'react';

export interface MinaLetterJCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJCircle(props: MinaLetterJCircleProps): React.ReactElement;
export default MinaLetterJCircle;
