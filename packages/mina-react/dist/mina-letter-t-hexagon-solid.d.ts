import React from 'react';

export interface MinaLetterTHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTHexagonSolid(props: MinaLetterTHexagonSolidProps): React.ReactElement;
export default MinaLetterTHexagonSolid;
