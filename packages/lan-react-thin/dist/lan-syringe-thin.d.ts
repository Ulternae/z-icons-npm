import React from 'react';

export interface LanSyringeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSyringeThin(props: LanSyringeThinProps): React.ReactElement;
export default LanSyringeThin;
