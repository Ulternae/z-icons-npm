import React from 'react';

export interface LanFolderBookmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderBookmarkThin(props: LanFolderBookmarkThinProps): React.ReactElement;
export default LanFolderBookmarkThin;
