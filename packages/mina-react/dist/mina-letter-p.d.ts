import React from 'react';

export interface MinaLetterPProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterP(props: MinaLetterPProps): React.ReactElement;
export default MinaLetterP;
