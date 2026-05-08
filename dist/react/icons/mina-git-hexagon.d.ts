import React from 'react';

export interface MinaGitHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitHexagon: React.FC<MinaGitHexagonProps>;
export default MinaGitHexagon;
