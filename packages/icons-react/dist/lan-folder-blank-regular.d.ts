import React from 'react';

export interface LanFolderBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderBlankRegular: React.FC<LanFolderBlankRegularProps>;
export default LanFolderBlankRegular;
