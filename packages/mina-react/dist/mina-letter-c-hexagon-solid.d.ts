import React from 'react';

export interface MinaLetterCHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCHexagonSolid(props: MinaLetterCHexagonSolidProps): React.ReactElement;
export default MinaLetterCHexagonSolid;
