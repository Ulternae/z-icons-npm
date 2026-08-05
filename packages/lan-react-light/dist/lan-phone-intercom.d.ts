import React from 'react';

export interface LanPhoneIntercomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneIntercom(props: LanPhoneIntercomProps): React.ReactElement;
export default LanPhoneIntercom;
