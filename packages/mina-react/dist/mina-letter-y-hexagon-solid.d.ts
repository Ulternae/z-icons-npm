import React from 'react';

export interface MinaLetterYHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYHexagonSolid(props: MinaLetterYHexagonSolidProps): React.ReactElement;
export default MinaLetterYHexagonSolid;
