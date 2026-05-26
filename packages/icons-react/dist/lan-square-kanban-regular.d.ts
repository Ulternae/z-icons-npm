import React from 'react';

export interface LanSquareKanbanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKanbanRegular: React.FC<LanSquareKanbanRegularProps>;
export default LanSquareKanbanRegular;
