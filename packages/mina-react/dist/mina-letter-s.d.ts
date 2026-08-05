import React from 'react';

export interface MinaLetterSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterS(props: MinaLetterSProps): React.ReactElement;
export default MinaLetterS;
