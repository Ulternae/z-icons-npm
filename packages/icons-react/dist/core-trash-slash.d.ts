import React from 'react';

export interface CoreTrashSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrashSlash: React.FC<CoreTrashSlashProps>;
export default CoreTrashSlash;
