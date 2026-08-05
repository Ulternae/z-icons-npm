import React from 'react';

export interface LanBadgeSheriffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeSheriff(props: LanBadgeSheriffProps): React.ReactElement;
export default LanBadgeSheriff;
