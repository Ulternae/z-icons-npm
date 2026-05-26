import React from 'react';

export interface LanFolderHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderHeartThin: React.FC<LanFolderHeartThinProps>;
export default LanFolderHeartThin;
