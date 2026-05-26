import React from 'react';

export interface LanFolderMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMinusRegular: React.FC<LanFolderMinusRegularProps>;
export default LanFolderMinusRegular;
