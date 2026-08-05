import React from 'react';

export interface MinaLetterYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterY(props: MinaLetterYProps): React.ReactElement;
export default MinaLetterY;
