import React from 'react';

export interface MinaGitOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitOctagonSolid: React.FC<MinaGitOctagonSolidProps>;
export default MinaGitOctagonSolid;
