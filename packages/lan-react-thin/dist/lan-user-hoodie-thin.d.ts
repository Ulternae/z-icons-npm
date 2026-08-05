import React from 'react';

export interface LanUserHoodieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHoodieThin(props: LanUserHoodieThinProps): React.ReactElement;
export default LanUserHoodieThin;
