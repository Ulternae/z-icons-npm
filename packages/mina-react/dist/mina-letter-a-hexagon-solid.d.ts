import React from 'react';

export interface MinaLetterAHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterAHexagonSolid(props: MinaLetterAHexagonSolidProps): React.ReactElement;
export default MinaLetterAHexagonSolid;
