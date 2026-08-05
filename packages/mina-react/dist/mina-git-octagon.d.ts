import React from 'react';

export interface MinaGitOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitOctagon(props: MinaGitOctagonProps): React.ReactElement;
export default MinaGitOctagon;
