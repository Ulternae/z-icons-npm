import React from 'react';

export interface MinaGitOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitOctagonSolid(props: MinaGitOctagonSolidProps): React.ReactElement;
export default MinaGitOctagonSolid;
