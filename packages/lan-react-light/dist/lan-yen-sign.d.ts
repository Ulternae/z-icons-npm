import React from 'react';

export interface LanYenSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYenSign(props: LanYenSignProps): React.ReactElement;
export default LanYenSign;
