import React from 'react';

export interface MinaLetterOCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOCircle(props: MinaLetterOCircleProps): React.ReactElement;
export default MinaLetterOCircle;
