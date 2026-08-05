import React from 'react';

export interface MinaLetterIHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterIHexagonSolid(props: MinaLetterIHexagonSolidProps): React.ReactElement;
export default MinaLetterIHexagonSolid;
