import React from 'react';

export interface LanBooksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooksRegular(props: LanBooksRegularProps): React.ReactElement;
export default LanBooksRegular;
