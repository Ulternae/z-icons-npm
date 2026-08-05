import React from 'react';

export interface LanUnderlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnderlineSolid(props: LanUnderlineSolidProps): React.ReactElement;
export default LanUnderlineSolid;
