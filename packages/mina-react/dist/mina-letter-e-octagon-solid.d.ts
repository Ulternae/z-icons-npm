import React from 'react';

export interface MinaLetterEOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterEOctagonSolid(props: MinaLetterEOctagonSolidProps): React.ReactElement;
export default MinaLetterEOctagonSolid;
