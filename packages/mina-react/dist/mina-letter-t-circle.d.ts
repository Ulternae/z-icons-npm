import React from 'react';

export interface MinaLetterTCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTCircle(props: MinaLetterTCircleProps): React.ReactElement;
export default MinaLetterTCircle;
