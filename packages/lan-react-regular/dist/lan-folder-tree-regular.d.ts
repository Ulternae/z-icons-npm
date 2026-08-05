import React from 'react';

export interface LanFolderTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderTreeRegular(props: LanFolderTreeRegularProps): React.ReactElement;
export default LanFolderTreeRegular;
