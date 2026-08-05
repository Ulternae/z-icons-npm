import React from 'react';

export interface MinaGitDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitDiamondSolid(props: MinaGitDiamondSolidProps): React.ReactElement;
export default MinaGitDiamondSolid;
