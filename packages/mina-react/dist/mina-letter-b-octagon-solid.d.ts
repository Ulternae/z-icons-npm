import React from 'react';

export interface MinaLetterBOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBOctagonSolid(props: MinaLetterBOctagonSolidProps): React.ReactElement;
export default MinaLetterBOctagonSolid;
