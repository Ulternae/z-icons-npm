import React from 'react';

export interface LanPlugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugRegular(props: LanPlugRegularProps): React.ReactElement;
export default LanPlugRegular;
