import React from 'react';

export interface CoreBoltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoltSlash(props: CoreBoltSlashProps): React.ReactElement;
export default CoreBoltSlash;
