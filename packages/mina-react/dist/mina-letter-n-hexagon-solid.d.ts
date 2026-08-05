import React from 'react';

export interface MinaLetterNHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNHexagonSolid(props: MinaLetterNHexagonSolidProps): React.ReactElement;
export default MinaLetterNHexagonSolid;
