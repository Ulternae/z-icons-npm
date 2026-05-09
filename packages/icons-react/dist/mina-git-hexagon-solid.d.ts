import React from 'react';

export interface MinaGitHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitHexagonSolid: React.FC<MinaGitHexagonSolidProps>;
export default MinaGitHexagonSolid;
