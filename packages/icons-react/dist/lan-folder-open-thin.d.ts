import React from 'react';

export interface LanFolderOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderOpenThin: React.FC<LanFolderOpenThinProps>;
export default LanFolderOpenThin;
