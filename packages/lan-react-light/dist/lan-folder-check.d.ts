import React from 'react';

export interface LanFolderCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderCheck(props: LanFolderCheckProps): React.ReactElement;
export default LanFolderCheck;
