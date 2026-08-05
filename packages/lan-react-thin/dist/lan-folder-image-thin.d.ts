import React from 'react';

export interface LanFolderImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderImageThin(props: LanFolderImageThinProps): React.ReactElement;
export default LanFolderImageThin;
