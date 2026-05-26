import React from 'react';

export interface LanFolderUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderUser: React.FC<LanFolderUserProps>;
export default LanFolderUser;
