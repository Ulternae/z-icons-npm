import React from 'react';

export interface NeoFilesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFiles: React.FC<NeoFilesProps>;
export default NeoFiles;
