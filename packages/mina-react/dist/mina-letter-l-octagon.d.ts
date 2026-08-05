import React from 'react';

export interface MinaLetterLOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLOctagon(props: MinaLetterLOctagonProps): React.ReactElement;
export default MinaLetterLOctagon;
