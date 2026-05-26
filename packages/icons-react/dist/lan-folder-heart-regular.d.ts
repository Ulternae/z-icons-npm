import React from 'react';

export interface LanFolderHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderHeartRegular: React.FC<LanFolderHeartRegularProps>;
export default LanFolderHeartRegular;
