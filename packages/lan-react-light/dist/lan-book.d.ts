import React from 'react';

export interface LanBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBook(props: LanBookProps): React.ReactElement;
export default LanBook;
