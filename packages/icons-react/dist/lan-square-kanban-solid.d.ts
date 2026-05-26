import React from 'react';

export interface LanSquareKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKanbanSolid: React.FC<LanSquareKanbanSolidProps>;
export default LanSquareKanbanSolid;
