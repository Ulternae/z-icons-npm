import React from 'react';

export interface LanTableBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableBar(props: LanTableBarProps): React.ReactElement;
export default LanTableBar;
