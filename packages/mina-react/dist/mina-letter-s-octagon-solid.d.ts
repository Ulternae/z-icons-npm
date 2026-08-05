import React from 'react';

export interface MinaLetterSOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSOctagonSolid(props: MinaLetterSOctagonSolidProps): React.ReactElement;
export default MinaLetterSOctagonSolid;
