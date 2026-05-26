import React from 'react';

export interface LanFolderCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderCheckThin: React.FC<LanFolderCheckThinProps>;
export default LanFolderCheckThin;
