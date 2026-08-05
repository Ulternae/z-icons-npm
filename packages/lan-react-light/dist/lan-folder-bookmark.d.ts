import React from 'react';

export interface LanFolderBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderBookmark(props: LanFolderBookmarkProps): React.ReactElement;
export default LanFolderBookmark;
