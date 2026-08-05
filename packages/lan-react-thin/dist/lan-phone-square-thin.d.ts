import React from 'react';

export interface LanPhoneSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneSquareThin(props: LanPhoneSquareThinProps): React.ReactElement;
export default LanPhoneSquareThin;
