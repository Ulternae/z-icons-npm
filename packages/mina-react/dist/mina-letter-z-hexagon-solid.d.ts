import React from 'react';

export interface MinaLetterZHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZHexagonSolid(props: MinaLetterZHexagonSolidProps): React.ReactElement;
export default MinaLetterZHexagonSolid;
