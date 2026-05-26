import React from 'react';

export interface LanFolderTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTimesRegular: React.FC<LanFolderTimesRegularProps>;
export default LanFolderTimesRegular;
