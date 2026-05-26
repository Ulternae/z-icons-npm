import React from 'react';

export interface LanFolderMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMinus: React.FC<LanFolderMinusProps>;
export default LanFolderMinus;
