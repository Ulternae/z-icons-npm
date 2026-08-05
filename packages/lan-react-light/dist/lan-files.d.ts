import React from 'react';

export interface LanFilesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFiles(props: LanFilesProps): React.ReactElement;
export default LanFiles;
