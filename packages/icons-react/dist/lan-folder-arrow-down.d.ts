import React from 'react';

export interface LanFolderArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderArrowDown: React.FC<LanFolderArrowDownProps>;
export default LanFolderArrowDown;
