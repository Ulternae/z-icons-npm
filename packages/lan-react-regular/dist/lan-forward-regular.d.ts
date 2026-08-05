import React from 'react';

export interface LanForwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForwardRegular(props: LanForwardRegularProps): React.ReactElement;
export default LanForwardRegular;
