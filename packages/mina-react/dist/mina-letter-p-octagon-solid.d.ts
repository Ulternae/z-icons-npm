import React from 'react';

export interface MinaLetterPOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPOctagonSolid(props: MinaLetterPOctagonSolidProps): React.ReactElement;
export default MinaLetterPOctagonSolid;
