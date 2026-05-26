import React from 'react';

export interface LanFolderCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderCheck: React.FC<LanFolderCheckProps>;
export default LanFolderCheck;
