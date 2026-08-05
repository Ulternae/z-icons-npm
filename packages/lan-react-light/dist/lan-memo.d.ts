import React from 'react';

export interface LanMemoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemo(props: LanMemoProps): React.ReactElement;
export default LanMemo;
