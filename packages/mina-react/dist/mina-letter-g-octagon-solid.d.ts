import React from 'react';

export interface MinaLetterGOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGOctagonSolid(props: MinaLetterGOctagonSolidProps): React.ReactElement;
export default MinaLetterGOctagonSolid;
