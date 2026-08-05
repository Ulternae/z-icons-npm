import React from 'react';

export interface LanFolderUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderUser(props: LanFolderUserProps): React.ReactElement;
export default LanFolderUser;
