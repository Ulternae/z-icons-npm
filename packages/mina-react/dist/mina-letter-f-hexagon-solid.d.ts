import React from 'react';

export interface MinaLetterFHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFHexagonSolid(props: MinaLetterFHexagonSolidProps): React.ReactElement;
export default MinaLetterFHexagonSolid;
