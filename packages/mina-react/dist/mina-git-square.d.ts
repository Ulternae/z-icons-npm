import React from 'react';

export interface MinaGitSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitSquare(props: MinaGitSquareProps): React.ReactElement;
export default MinaGitSquare;
