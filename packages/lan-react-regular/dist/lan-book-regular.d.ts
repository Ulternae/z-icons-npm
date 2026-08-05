import React from 'react';

export interface LanBookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookRegular(props: LanBookRegularProps): React.ReactElement;
export default LanBookRegular;
