import React from 'react';

export interface LanFolderGridThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderGridThin: React.FC<LanFolderGridThinProps>;
export default LanFolderGridThin;
