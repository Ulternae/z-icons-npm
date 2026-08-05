import React from 'react';

export interface LanBookCopyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookCopyRegular(props: LanBookCopyRegularProps): React.ReactElement;
export default LanBookCopyRegular;
