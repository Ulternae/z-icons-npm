import React from 'react';

export interface LanHandSpockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSpockRegular(props: LanHandSpockRegularProps): React.ReactElement;
export default LanHandSpockRegular;
