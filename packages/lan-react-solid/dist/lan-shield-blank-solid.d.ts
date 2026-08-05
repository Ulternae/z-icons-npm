import React from 'react';

export interface LanShieldBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldBlankSolid(props: LanShieldBlankSolidProps): React.ReactElement;
export default LanShieldBlankSolid;
