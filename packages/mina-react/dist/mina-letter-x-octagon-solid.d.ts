import React from 'react';

export interface MinaLetterXOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXOctagonSolid(props: MinaLetterXOctagonSolidProps): React.ReactElement;
export default MinaLetterXOctagonSolid;
