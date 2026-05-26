import React from 'react';

export interface LanFolderTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTimesThin: React.FC<LanFolderTimesThinProps>;
export default LanFolderTimesThin;
