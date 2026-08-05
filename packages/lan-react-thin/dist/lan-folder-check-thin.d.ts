import React from 'react';

export interface LanFolderCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderCheckThin(props: LanFolderCheckThinProps): React.ReactElement;
export default LanFolderCheckThin;
