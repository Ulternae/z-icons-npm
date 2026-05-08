import React from 'react';

export interface MinaSquareKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareKanbanSolid: React.FC<MinaSquareKanbanSolidProps>;
export default MinaSquareKanbanSolid;
