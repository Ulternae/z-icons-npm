import React from 'react';

export interface MinaGitDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitDiamondSolid: React.FC<MinaGitDiamondSolidProps>;
export default MinaGitDiamondSolid;
