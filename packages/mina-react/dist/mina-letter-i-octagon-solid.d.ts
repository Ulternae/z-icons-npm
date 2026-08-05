import React from 'react';

export interface MinaLetterIOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterIOctagonSolid(props: MinaLetterIOctagonSolidProps): React.ReactElement;
export default MinaLetterIOctagonSolid;
