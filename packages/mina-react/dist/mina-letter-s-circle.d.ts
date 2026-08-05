import React from 'react';

export interface MinaLetterSCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSCircle(props: MinaLetterSCircleProps): React.ReactElement;
export default MinaLetterSCircle;
