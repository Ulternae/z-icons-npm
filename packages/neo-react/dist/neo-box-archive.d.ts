import React from 'react';

export interface NeoBoxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBoxArchive(props: NeoBoxArchiveProps): React.ReactElement;
export default NeoBoxArchive;
