import React from 'react';

export interface LanFolderCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderCheckRegular: React.FC<LanFolderCheckRegularProps>;
export default LanFolderCheckRegular;
