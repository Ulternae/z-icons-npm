import React from 'react';

export interface MinaArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArchive(props: MinaArchiveProps): React.ReactElement;
export default MinaArchive;
