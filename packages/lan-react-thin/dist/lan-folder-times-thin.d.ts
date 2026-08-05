import React from 'react';

export interface LanFolderTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderTimesThin(props: LanFolderTimesThinProps): React.ReactElement;
export default LanFolderTimesThin;
