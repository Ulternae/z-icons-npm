import React from 'react';

export interface LanFoldersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFoldersRegular: React.FC<LanFoldersRegularProps>;
export default LanFoldersRegular;
