import React from 'react';

export interface LanBadmintonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadminton(props: LanBadmintonProps): React.ReactElement;
export default LanBadminton;
