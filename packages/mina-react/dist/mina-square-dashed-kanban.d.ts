import React from 'react';

export interface MinaSquareDashedKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareDashedKanban(props: MinaSquareDashedKanbanProps): React.ReactElement;
export default MinaSquareDashedKanban;
