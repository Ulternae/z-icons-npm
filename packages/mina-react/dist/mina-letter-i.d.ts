import React from 'react';

export interface MinaLetterIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterI(props: MinaLetterIProps): React.ReactElement;
export default MinaLetterI;
