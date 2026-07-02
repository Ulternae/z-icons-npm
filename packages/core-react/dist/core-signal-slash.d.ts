import React from 'react';

export interface CoreSignalSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSignalSlash(props: CoreSignalSlashProps): React.ReactElement;
export default CoreSignalSlash;
