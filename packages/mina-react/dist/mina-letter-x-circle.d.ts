import React from 'react';

export interface MinaLetterXCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXCircle(props: MinaLetterXCircleProps): React.ReactElement;
export default MinaLetterXCircle;
