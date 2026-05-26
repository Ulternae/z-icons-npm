import React from 'react';

export interface LanSquareKanbanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKanbanThin: React.FC<LanSquareKanbanThinProps>;
export default LanSquareKanbanThin;
