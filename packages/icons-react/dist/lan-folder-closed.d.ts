import React from 'react';

export interface LanFolderClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderClosed: React.FC<LanFolderClosedProps>;
export default LanFolderClosed;
