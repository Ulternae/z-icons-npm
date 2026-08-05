import React from 'react';

export interface LanPhoneConnectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneConnection(props: LanPhoneConnectionProps): React.ReactElement;
export default LanPhoneConnection;
