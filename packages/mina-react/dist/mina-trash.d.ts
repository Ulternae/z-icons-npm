import React from 'react';

export interface MinaTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrash(props: MinaTrashProps): React.ReactElement;
export default MinaTrash;
