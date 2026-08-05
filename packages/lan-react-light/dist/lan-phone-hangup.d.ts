import React from 'react';

export interface LanPhoneHangupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneHangup(props: LanPhoneHangupProps): React.ReactElement;
export default LanPhoneHangup;
