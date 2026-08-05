import React from 'react';

export interface LanFolderPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderPlusThin(props: LanFolderPlusThinProps): React.ReactElement;
export default LanFolderPlusThin;
