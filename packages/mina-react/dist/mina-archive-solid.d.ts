import React from 'react';

export interface MinaArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArchiveSolid(props: MinaArchiveSolidProps): React.ReactElement;
export default MinaArchiveSolid;
