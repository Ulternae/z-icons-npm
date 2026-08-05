import React from 'react';

export interface MinaLetterKOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKOctagonSolid(props: MinaLetterKOctagonSolidProps): React.ReactElement;
export default MinaLetterKOctagonSolid;
