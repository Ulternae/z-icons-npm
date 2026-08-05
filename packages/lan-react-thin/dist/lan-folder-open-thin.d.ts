import React from 'react';

export interface LanFolderOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderOpenThin(props: LanFolderOpenThinProps): React.ReactElement;
export default LanFolderOpenThin;
