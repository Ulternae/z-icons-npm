import React from 'react';

export interface MinaLetterTOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTOctagonSolid(props: MinaLetterTOctagonSolidProps): React.ReactElement;
export default MinaLetterTOctagonSolid;
