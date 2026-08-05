import React from 'react';

export interface LanFolderUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderUserThin(props: LanFolderUserThinProps): React.ReactElement;
export default LanFolderUserThin;
