import React from 'react';

export interface MinaInboxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxArchive: React.FC<MinaInboxArchiveProps>;
export default MinaInboxArchive;
