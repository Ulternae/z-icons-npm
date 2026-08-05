import React from 'react';

export interface LanPhoneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneAlt(props: LanPhoneAltProps): React.ReactElement;
export default LanPhoneAlt;
