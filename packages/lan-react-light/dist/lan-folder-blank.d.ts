import React from 'react';

export interface LanFolderBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderBlank(props: LanFolderBlankProps): React.ReactElement;
export default LanFolderBlank;
