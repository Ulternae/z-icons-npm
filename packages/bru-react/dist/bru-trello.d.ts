import React from 'react';

export interface BruTrelloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTrello(props: BruTrelloProps): React.ReactElement;
export default BruTrello;
