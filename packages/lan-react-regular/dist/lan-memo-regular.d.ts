import React from 'react';

export interface LanMemoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoRegular(props: LanMemoRegularProps): React.ReactElement;
export default LanMemoRegular;
