import React from 'react';

export interface MinaLetterDOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDOctagon(props: MinaLetterDOctagonProps): React.ReactElement;
export default MinaLetterDOctagon;
