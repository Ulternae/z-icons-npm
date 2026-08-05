import React from 'react';

export interface MinaInboxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxArchive(props: MinaInboxArchiveProps): React.ReactElement;
export default MinaInboxArchive;
