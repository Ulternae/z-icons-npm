import React from 'react';

export interface LanFoldersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolders(props: LanFoldersProps): React.ReactElement;
export default LanFolders;
