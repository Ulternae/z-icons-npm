import React from 'react';

export interface MinaLetterJOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJOctagonSolid(props: MinaLetterJOctagonSolidProps): React.ReactElement;
export default MinaLetterJOctagonSolid;
