import React from 'react';

export interface MinaSquareKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareKanban(props: MinaSquareKanbanProps): React.ReactElement;
export default MinaSquareKanban;
