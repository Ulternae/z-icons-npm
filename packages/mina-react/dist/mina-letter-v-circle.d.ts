import React from 'react';

export interface MinaLetterVCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVCircle(props: MinaLetterVCircleProps): React.ReactElement;
export default MinaLetterVCircle;
