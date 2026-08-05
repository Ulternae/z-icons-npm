import React from 'react';

export interface LanBooksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooks(props: LanBooksProps): React.ReactElement;
export default LanBooks;
