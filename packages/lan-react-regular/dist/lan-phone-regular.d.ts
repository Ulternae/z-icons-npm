import React from 'react';

export interface LanPhoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneRegular(props: LanPhoneRegularProps): React.ReactElement;
export default LanPhoneRegular;
