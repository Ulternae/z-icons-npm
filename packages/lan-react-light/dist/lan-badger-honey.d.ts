import React from 'react';

export interface LanBadgerHoneyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgerHoney(props: LanBadgerHoneyProps): React.ReactElement;
export default LanBadgerHoney;
