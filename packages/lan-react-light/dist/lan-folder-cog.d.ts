import React from 'react';

export interface LanFolderCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderCog(props: LanFolderCogProps): React.ReactElement;
export default LanFolderCog;
