import React from 'react';

export interface LanFolderBookmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderBookmarkThin: React.FC<LanFolderBookmarkThinProps>;
export default LanFolderBookmarkThin;
