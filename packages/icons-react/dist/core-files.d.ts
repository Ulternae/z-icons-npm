import React from 'react';

export interface CoreFilesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFiles: React.FC<CoreFilesProps>;
export default CoreFiles;
