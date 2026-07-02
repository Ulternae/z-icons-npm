import React from 'react';

export interface CoreBellSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBellSlash(props: CoreBellSlashProps): React.ReactElement;
export default CoreBellSlash;
