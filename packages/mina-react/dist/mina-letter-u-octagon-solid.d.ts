import React from 'react';

export interface MinaLetterUOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUOctagonSolid(props: MinaLetterUOctagonSolidProps): React.ReactElement;
export default MinaLetterUOctagonSolid;
