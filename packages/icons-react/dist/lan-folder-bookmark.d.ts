import React from 'react';

export interface LanFolderBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderBookmark: React.FC<LanFolderBookmarkProps>;
export default LanFolderBookmark;
