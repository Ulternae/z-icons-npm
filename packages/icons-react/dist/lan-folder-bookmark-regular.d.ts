import React from 'react';

export interface LanFolderBookmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderBookmarkRegular: React.FC<LanFolderBookmarkRegularProps>;
export default LanFolderBookmarkRegular;
