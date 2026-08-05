import React from 'react';

export interface LanFolderMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderMinusRegular(props: LanFolderMinusRegularProps): React.ReactElement;
export default LanFolderMinusRegular;
