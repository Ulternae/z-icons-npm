import React from 'react';

export interface LanFolderUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderUserRegular: React.FC<LanFolderUserRegularProps>;
export default LanFolderUserRegular;
