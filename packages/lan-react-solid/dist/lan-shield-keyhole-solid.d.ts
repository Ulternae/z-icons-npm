import React from 'react';

export interface LanShieldKeyholeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldKeyholeSolid(props: LanShieldKeyholeSolidProps): React.ReactElement;
export default LanShieldKeyholeSolid;
