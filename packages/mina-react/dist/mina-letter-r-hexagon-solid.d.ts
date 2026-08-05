import React from 'react';

export interface MinaLetterRHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRHexagonSolid(props: MinaLetterRHexagonSolidProps): React.ReactElement;
export default MinaLetterRHexagonSolid;
