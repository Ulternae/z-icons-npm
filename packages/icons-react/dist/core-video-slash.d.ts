import React from 'react';

export interface CoreVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVideoSlash: React.FC<CoreVideoSlashProps>;
export default CoreVideoSlash;
