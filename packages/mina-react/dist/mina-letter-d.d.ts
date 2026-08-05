import React from 'react';

export interface MinaLetterDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterD(props: MinaLetterDProps): React.ReactElement;
export default MinaLetterD;
