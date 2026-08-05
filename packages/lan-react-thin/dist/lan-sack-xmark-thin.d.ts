import React from 'react';

export interface LanSackXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackXmarkThin(props: LanSackXmarkThinProps): React.ReactElement;
export default LanSackXmarkThin;
