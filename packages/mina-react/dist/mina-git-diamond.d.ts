import React from 'react';

export interface MinaGitDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitDiamond(props: MinaGitDiamondProps): React.ReactElement;
export default MinaGitDiamond;
