import React from 'react';

export interface LanFolderUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderUserThin: React.FC<LanFolderUserThinProps>;
export default LanFolderUserThin;
