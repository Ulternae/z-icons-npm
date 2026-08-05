import React from 'react';

export interface LanFolderPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderPlusRegular(props: LanFolderPlusRegularProps): React.ReactElement;
export default LanFolderPlusRegular;
