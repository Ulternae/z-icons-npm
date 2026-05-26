import React from 'react';

export interface LanFolderBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderBlank: React.FC<LanFolderBlankProps>;
export default LanFolderBlank;
