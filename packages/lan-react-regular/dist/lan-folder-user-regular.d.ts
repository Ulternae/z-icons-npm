import React from 'react';

export interface LanFolderUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderUserRegular(props: LanFolderUserRegularProps): React.ReactElement;
export default LanFolderUserRegular;
