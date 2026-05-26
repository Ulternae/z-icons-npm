import React from 'react';

export interface LanFolderPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderPlus: React.FC<LanFolderPlusProps>;
export default LanFolderPlus;
