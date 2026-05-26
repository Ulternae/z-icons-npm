import React from 'react';

export interface LanFolderTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTreeThin: React.FC<LanFolderTreeThinProps>;
export default LanFolderTreeThin;
