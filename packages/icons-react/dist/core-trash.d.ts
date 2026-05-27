import React from 'react';

export interface CoreTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrash: React.FC<CoreTrashProps>;
export default CoreTrash;
