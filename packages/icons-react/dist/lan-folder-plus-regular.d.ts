import React from 'react';

export interface LanFolderPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderPlusRegular: React.FC<LanFolderPlusRegularProps>;
export default LanFolderPlusRegular;
