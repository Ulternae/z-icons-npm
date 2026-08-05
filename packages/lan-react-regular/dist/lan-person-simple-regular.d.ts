import React from 'react';

export interface LanPersonSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSimpleRegular(props: LanPersonSimpleRegularProps): React.ReactElement;
export default LanPersonSimpleRegular;
