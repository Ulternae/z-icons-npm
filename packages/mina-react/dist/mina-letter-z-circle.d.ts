import React from 'react';

export interface MinaLetterZCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZCircle(props: MinaLetterZCircleProps): React.ReactElement;
export default MinaLetterZCircle;
