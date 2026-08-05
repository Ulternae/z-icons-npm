import React from 'react';

export interface LanNRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNRegular(props: LanNRegularProps): React.ReactElement;
export default LanNRegular;
