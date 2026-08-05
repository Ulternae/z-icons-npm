import React from 'react';

export interface LanSquareKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKanban(props: LanSquareKanbanProps): React.ReactElement;
export default LanSquareKanban;
