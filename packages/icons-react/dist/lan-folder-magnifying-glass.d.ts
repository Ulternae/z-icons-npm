import React from 'react';

export interface LanFolderMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMagnifyingGlass: React.FC<LanFolderMagnifyingGlassProps>;
export default LanFolderMagnifyingGlass;
