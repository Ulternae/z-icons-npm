import React from 'react';

export interface LanFolderImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderImageThin: React.FC<LanFolderImageThinProps>;
export default LanFolderImageThin;
