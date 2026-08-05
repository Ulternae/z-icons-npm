import React from 'react';

export interface LanSackXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackXmark(props: LanSackXmarkProps): React.ReactElement;
export default LanSackXmark;
