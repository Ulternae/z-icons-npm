import React from 'react';

export interface MinaLetterOHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOHexagonSolid(props: MinaLetterOHexagonSolidProps): React.ReactElement;
export default MinaLetterOHexagonSolid;
