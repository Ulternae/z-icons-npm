import React from 'react';

export interface LanPhoneConnectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneConnectionRegular(props: LanPhoneConnectionRegularProps): React.ReactElement;
export default LanPhoneConnectionRegular;
