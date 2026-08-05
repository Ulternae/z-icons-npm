import React from 'react';

export interface LanKazooRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKazooRegular(props: LanKazooRegularProps): React.ReactElement;
export default LanKazooRegular;
