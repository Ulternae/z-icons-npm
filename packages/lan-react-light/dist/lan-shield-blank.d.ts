import React from 'react';

export interface LanShieldBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldBlank(props: LanShieldBlankProps): React.ReactElement;
export default LanShieldBlank;
