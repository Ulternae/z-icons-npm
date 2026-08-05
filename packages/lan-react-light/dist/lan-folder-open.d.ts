import React from 'react';

export interface LanFolderOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderOpen(props: LanFolderOpenProps): React.ReactElement;
export default LanFolderOpen;
