import React from 'react';

export interface MinaLetterLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterL(props: MinaLetterLProps): React.ReactElement;
export default MinaLetterL;
