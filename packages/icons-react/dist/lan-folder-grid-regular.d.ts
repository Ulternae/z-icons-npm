import React from 'react';

export interface LanFolderGridRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderGridRegular: React.FC<LanFolderGridRegularProps>;
export default LanFolderGridRegular;
