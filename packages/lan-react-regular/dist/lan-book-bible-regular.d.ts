import React from 'react';

export interface LanBookBibleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBibleRegular(props: LanBookBibleRegularProps): React.ReactElement;
export default LanBookBibleRegular;
