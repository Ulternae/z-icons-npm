import React from 'react';

export interface LanFolderClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderClosed(props: LanFolderClosedProps): React.ReactElement;
export default LanFolderClosed;
