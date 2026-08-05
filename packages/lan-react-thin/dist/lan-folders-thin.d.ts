import React from 'react';

export interface LanFoldersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFoldersThin(props: LanFoldersThinProps): React.ReactElement;
export default LanFoldersThin;
