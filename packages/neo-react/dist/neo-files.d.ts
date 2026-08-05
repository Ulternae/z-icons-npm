import React from 'react';

export interface NeoFilesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFiles(props: NeoFilesProps): React.ReactElement;
export default NeoFiles;
