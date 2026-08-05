import React from 'react';

export interface MinaLetterWCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWCircle(props: MinaLetterWCircleProps): React.ReactElement;
export default MinaLetterWCircle;
