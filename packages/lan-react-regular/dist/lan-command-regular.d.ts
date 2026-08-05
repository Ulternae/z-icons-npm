import React from 'react';

export interface LanCommandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommandRegular(props: LanCommandRegularProps): React.ReactElement;
export default LanCommandRegular;
