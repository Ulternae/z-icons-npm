import React from 'react';

export interface MinaLetterMOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMOctagonSolid(props: MinaLetterMOctagonSolidProps): React.ReactElement;
export default MinaLetterMOctagonSolid;
