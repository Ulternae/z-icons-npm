import React from 'react';

export interface LanTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrash(props: LanTrashProps): React.ReactElement;
export default LanTrash;
