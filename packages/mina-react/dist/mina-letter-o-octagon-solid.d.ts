import React from 'react';

export interface MinaLetterOOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOOctagonSolid(props: MinaLetterOOctagonSolidProps): React.ReactElement;
export default MinaLetterOOctagonSolid;
