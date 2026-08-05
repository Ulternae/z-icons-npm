import React from 'react';

export interface MinaLetterQCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQCircle(props: MinaLetterQCircleProps): React.ReactElement;
export default MinaLetterQCircle;
