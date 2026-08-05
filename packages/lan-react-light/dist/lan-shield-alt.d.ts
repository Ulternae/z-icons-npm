import React from 'react';

export interface LanShieldAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldAlt(props: LanShieldAltProps): React.ReactElement;
export default LanShieldAlt;
