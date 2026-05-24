import React from 'react';

export interface BruTrelloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTrello: React.FC<BruTrelloProps>;
export default BruTrello;
