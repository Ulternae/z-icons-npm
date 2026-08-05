import React from 'react';

export interface MinaLetterKHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKHexagonSolid(props: MinaLetterKHexagonSolidProps): React.ReactElement;
export default MinaLetterKHexagonSolid;
