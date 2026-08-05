import React from 'react';

export interface LanSaltShakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaltShaker(props: LanSaltShakerProps): React.ReactElement;
export default LanSaltShaker;
