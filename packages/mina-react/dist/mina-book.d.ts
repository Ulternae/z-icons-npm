import React from 'react';

export interface MinaBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBook(props: MinaBookProps): React.ReactElement;
export default MinaBook;
