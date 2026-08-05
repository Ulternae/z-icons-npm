import React from 'react';

export interface LanFolderImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderImageRegular(props: LanFolderImageRegularProps): React.ReactElement;
export default LanFolderImageRegular;
