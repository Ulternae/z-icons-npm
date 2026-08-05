import React from 'react';

export interface LanFolderGridThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderGridThin(props: LanFolderGridThinProps): React.ReactElement;
export default LanFolderGridThin;
