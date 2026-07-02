import React from 'react';

export interface CoreVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVideoSlash(props: CoreVideoSlashProps): React.ReactElement;
export default CoreVideoSlash;
