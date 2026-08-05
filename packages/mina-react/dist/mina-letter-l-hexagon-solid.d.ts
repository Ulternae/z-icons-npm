import React from 'react';

export interface MinaLetterLHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLHexagonSolid(props: MinaLetterLHexagonSolidProps): React.ReactElement;
export default MinaLetterLHexagonSolid;
