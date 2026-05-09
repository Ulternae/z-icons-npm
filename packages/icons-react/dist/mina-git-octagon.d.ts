import React from 'react';

export interface MinaGitOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitOctagon: React.FC<MinaGitOctagonProps>;
export default MinaGitOctagon;
