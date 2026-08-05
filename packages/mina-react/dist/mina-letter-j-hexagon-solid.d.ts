import React from 'react';

export interface MinaLetterJHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJHexagonSolid(props: MinaLetterJHexagonSolidProps): React.ReactElement;
export default MinaLetterJHexagonSolid;
