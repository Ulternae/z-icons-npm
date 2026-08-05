import React from 'react';

export interface LanShieldKeyholeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldKeyholeThin(props: LanShieldKeyholeThinProps): React.ReactElement;
export default LanShieldKeyholeThin;
