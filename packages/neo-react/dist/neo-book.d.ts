import React from 'react';

export interface NeoBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBook(props: NeoBookProps): React.ReactElement;
export default NeoBook;
