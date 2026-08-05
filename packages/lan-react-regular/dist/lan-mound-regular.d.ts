import React from 'react';

export interface LanMoundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoundRegular(props: LanMoundRegularProps): React.ReactElement;
export default LanMoundRegular;
