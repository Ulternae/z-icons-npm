import React from 'react';

export interface CoreTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrash(props: CoreTrashProps): React.ReactElement;
export default CoreTrash;
