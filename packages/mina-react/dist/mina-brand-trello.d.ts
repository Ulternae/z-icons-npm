import React from 'react';

export interface MinaBrandTrelloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandTrello(props: MinaBrandTrelloProps): React.ReactElement;
export default MinaBrandTrello;
