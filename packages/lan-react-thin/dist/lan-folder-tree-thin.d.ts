import React from 'react';

export interface LanFolderTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderTreeThin(props: LanFolderTreeThinProps): React.ReactElement;
export default LanFolderTreeThin;
