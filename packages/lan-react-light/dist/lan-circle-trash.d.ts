import React from 'react';

export interface LanCircleTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTrash(props: LanCircleTrashProps): React.ReactElement;
export default LanCircleTrash;
