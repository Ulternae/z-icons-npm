import React from 'react';

export interface MinaLetterCOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCOctagonSolid(props: MinaLetterCOctagonSolidProps): React.ReactElement;
export default MinaLetterCOctagonSolid;
