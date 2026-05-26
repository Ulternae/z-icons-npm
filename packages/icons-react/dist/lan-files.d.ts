import React from 'react';

export interface LanFilesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFiles: React.FC<LanFilesProps>;
export default LanFiles;
