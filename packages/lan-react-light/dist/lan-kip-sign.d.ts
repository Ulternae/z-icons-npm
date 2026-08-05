import React from 'react';

export interface LanKipSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKipSign(props: LanKipSignProps): React.ReactElement;
export default LanKipSign;
