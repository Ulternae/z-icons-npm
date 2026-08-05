import React from 'react';

export interface MinaLetterLOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLOctagonSolid(props: MinaLetterLOctagonSolidProps): React.ReactElement;
export default MinaLetterLOctagonSolid;
