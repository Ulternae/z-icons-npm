import React from 'react';

export interface CoreSignalSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSignalSlash: React.FC<CoreSignalSlashProps>;
export default CoreSignalSlash;
