import React from 'react';

export interface LanPhoneRotaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneRotary(props: LanPhoneRotaryProps): React.ReactElement;
export default LanPhoneRotary;
