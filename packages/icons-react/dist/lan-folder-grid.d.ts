import React from 'react';

export interface LanFolderGridProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderGrid: React.FC<LanFolderGridProps>;
export default LanFolderGrid;
