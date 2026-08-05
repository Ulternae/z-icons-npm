import React from 'react';

export interface LanFolderBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderBlankSolid(props: LanFolderBlankSolidProps): React.ReactElement;
export default LanFolderBlankSolid;
