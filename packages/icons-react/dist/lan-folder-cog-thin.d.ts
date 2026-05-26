import React from 'react';

export interface LanFolderCogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderCogThin: React.FC<LanFolderCogThinProps>;
export default LanFolderCogThin;
