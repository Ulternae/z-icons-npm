import React from 'react';

export interface MinaBrandTrelloSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandTrelloSolid(props: MinaBrandTrelloSolidProps): React.ReactElement;
export default MinaBrandTrelloSolid;
