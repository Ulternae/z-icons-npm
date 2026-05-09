import React from 'react';

export interface MinaSquareKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareKanban: React.FC<MinaSquareKanbanProps>;
export default MinaSquareKanban;
