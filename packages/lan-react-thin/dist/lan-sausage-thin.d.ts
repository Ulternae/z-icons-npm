import React from 'react';

export interface LanSausageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSausageThin(props: LanSausageThinProps): React.ReactElement;
export default LanSausageThin;
