import React from 'react';

export interface LanFolderOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderOpen: React.FC<LanFolderOpenProps>;
export default LanFolderOpen;
