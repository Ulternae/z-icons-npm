import React from 'react';

export interface LanTrilliumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrilliumRegular(props: LanTrilliumRegularProps): React.ReactElement;
export default LanTrilliumRegular;
