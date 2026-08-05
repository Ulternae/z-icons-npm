import React from 'react';

export interface LanSquareKanbanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKanbanRegular(props: LanSquareKanbanRegularProps): React.ReactElement;
export default LanSquareKanbanRegular;
