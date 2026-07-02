import React from 'react';

export interface CoreBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBook(props: CoreBookProps): React.ReactElement;
export default CoreBook;
