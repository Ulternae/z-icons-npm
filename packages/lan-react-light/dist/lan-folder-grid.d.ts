import React from 'react';

export interface LanFolderGridProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderGrid(props: LanFolderGridProps): React.ReactElement;
export default LanFolderGrid;
