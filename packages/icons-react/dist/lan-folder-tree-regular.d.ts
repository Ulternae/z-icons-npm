import React from 'react';

export interface LanFolderTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTreeRegular: React.FC<LanFolderTreeRegularProps>;
export default LanFolderTreeRegular;
