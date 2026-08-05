import React from 'react';

export interface LanBadgeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeThin(props: LanBadgeThinProps): React.ReactElement;
export default LanBadgeThin;
