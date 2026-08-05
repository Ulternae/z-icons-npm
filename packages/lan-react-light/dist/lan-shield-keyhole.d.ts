import React from 'react';

export interface LanShieldKeyholeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldKeyhole(props: LanShieldKeyholeProps): React.ReactElement;
export default LanShieldKeyhole;
