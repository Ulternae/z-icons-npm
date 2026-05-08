import React from 'react';

export interface MinaBrandTrelloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandTrello: React.FC<MinaBrandTrelloProps>;
export default MinaBrandTrello;
