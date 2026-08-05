import React from 'react';

export interface MinaLetterFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterF(props: MinaLetterFProps): React.ReactElement;
export default MinaLetterF;
