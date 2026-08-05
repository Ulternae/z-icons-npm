import React from 'react';

export interface MinaLetterZOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZOctagon(props: MinaLetterZOctagonProps): React.ReactElement;
export default MinaLetterZOctagon;
