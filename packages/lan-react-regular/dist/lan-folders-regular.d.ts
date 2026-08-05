import React from 'react';

export interface LanFoldersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFoldersRegular(props: LanFoldersRegularProps): React.ReactElement;
export default LanFoldersRegular;
