import React from 'react';

export interface LanSquareKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKanban: React.FC<LanSquareKanbanProps>;
export default LanSquareKanban;
