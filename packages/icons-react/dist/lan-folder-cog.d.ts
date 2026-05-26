import React from 'react';

export interface LanFolderCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderCog: React.FC<LanFolderCogProps>;
export default LanFolderCog;
