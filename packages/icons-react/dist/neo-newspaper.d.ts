import React from 'react';

export interface NeoNewspaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoNewspaper: React.FC<NeoNewspaperProps>;
export default NeoNewspaper;
