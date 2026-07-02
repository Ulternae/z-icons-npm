import React from 'react';

export interface CoreFilesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFiles(props: CoreFilesProps): React.ReactElement;
export default CoreFiles;
