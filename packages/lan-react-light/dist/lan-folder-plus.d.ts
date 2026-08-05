import React from 'react';

export interface LanFolderPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderPlus(props: LanFolderPlusProps): React.ReactElement;
export default LanFolderPlus;
