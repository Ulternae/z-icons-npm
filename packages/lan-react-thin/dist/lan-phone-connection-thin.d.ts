import React from 'react';

export interface LanPhoneConnectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneConnectionThin(props: LanPhoneConnectionThinProps): React.ReactElement;
export default LanPhoneConnectionThin;
