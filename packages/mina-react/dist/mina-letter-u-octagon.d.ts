import React from 'react';

export interface MinaLetterUOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUOctagon(props: MinaLetterUOctagonProps): React.ReactElement;
export default MinaLetterUOctagon;
