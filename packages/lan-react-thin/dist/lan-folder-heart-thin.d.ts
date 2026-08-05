import React from 'react';

export interface LanFolderHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderHeartThin(props: LanFolderHeartThinProps): React.ReactElement;
export default LanFolderHeartThin;
