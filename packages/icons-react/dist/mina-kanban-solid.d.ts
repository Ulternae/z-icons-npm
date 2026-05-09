import React from 'react';

export interface MinaKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaKanbanSolid: React.FC<MinaKanbanSolidProps>;
export default MinaKanbanSolid;
