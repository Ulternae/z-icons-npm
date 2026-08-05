import React from 'react';

export interface LanFolderGridRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderGridRegular(props: LanFolderGridRegularProps): React.ReactElement;
export default LanFolderGridRegular;
