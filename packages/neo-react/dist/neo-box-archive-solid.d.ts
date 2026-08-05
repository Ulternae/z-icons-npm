import React from 'react';

export interface NeoBoxArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBoxArchiveSolid(props: NeoBoxArchiveSolidProps): React.ReactElement;
export default NeoBoxArchiveSolid;
