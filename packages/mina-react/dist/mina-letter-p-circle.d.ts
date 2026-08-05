import React from 'react';

export interface MinaLetterPCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPCircle(props: MinaLetterPCircleProps): React.ReactElement;
export default MinaLetterPCircle;
