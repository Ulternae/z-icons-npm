import React from 'react';

export interface MinaLetterHHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHHexagonSolid(props: MinaLetterHHexagonSolidProps): React.ReactElement;
export default MinaLetterHHexagonSolid;
