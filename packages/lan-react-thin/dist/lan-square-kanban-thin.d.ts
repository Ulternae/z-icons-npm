import React from 'react';

export interface LanSquareKanbanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKanbanThin(props: LanSquareKanbanThinProps): React.ReactElement;
export default LanSquareKanbanThin;
