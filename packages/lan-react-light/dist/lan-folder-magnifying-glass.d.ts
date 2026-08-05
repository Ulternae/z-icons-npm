import React from 'react';

export interface LanFolderMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderMagnifyingGlass(props: LanFolderMagnifyingGlassProps): React.ReactElement;
export default LanFolderMagnifyingGlass;
