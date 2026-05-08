import React from 'react';

export interface MinaGitSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitSquare: React.FC<MinaGitSquareProps>;
export default MinaGitSquare;
