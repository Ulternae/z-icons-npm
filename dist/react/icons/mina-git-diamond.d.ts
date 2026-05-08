import React from 'react';

export interface MinaGitDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitDiamond: React.FC<MinaGitDiamondProps>;
export default MinaGitDiamond;
