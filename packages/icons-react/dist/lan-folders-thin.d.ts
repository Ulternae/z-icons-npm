import React from 'react';

export interface LanFoldersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFoldersThin: React.FC<LanFoldersThinProps>;
export default LanFoldersThin;
