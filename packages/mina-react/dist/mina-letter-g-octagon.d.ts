import React from 'react';

export interface MinaLetterGOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGOctagon(props: MinaLetterGOctagonProps): React.ReactElement;
export default MinaLetterGOctagon;
