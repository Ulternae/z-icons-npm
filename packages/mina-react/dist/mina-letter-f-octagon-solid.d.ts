import React from 'react';

export interface MinaLetterFOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFOctagonSolid(props: MinaLetterFOctagonSolidProps): React.ReactElement;
export default MinaLetterFOctagonSolid;
