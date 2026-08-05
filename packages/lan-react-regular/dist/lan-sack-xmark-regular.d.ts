import React from 'react';

export interface LanSackXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSackXmarkRegular(props: LanSackXmarkRegularProps): React.ReactElement;
export default LanSackXmarkRegular;
