import React from 'react';

export interface LanFolderPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderPlusThin: React.FC<LanFolderPlusThinProps>;
export default LanFolderPlusThin;
