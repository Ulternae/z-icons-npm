import React from 'react';

export interface LanFolderBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderBlankThin(props: LanFolderBlankThinProps): React.ReactElement;
export default LanFolderBlankThin;
