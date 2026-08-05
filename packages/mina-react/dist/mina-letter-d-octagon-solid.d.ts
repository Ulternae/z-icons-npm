import React from 'react';

export interface MinaLetterDOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDOctagonSolid(props: MinaLetterDOctagonSolidProps): React.ReactElement;
export default MinaLetterDOctagonSolid;
