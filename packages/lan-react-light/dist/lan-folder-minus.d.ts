import React from 'react';

export interface LanFolderMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderMinus(props: LanFolderMinusProps): React.ReactElement;
export default LanFolderMinus;
