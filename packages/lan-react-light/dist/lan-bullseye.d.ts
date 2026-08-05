import React from 'react';

export interface LanBullseyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseye(props: LanBullseyeProps): React.ReactElement;
export default LanBullseye;
