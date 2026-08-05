import React from 'react';

export interface MinaLetterQHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQHexagonSolid(props: MinaLetterQHexagonSolidProps): React.ReactElement;
export default MinaLetterQHexagonSolid;
