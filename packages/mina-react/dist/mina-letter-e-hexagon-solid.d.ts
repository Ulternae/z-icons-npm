import React from 'react';

export interface MinaLetterEHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterEHexagonSolid(props: MinaLetterEHexagonSolidProps): React.ReactElement;
export default MinaLetterEHexagonSolid;
