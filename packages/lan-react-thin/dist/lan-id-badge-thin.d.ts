import React from 'react';

export interface LanIdBadgeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdBadgeThin(props: LanIdBadgeThinProps): React.ReactElement;
export default LanIdBadgeThin;
