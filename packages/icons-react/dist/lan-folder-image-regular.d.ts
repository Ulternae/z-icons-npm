import React from 'react';

export interface LanFolderImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderImageRegular: React.FC<LanFolderImageRegularProps>;
export default LanFolderImageRegular;
