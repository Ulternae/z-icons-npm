import React from 'react';

export interface LanFolderOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderOpenRegular: React.FC<LanFolderOpenRegularProps>;
export default LanFolderOpenRegular;
