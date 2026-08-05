import React from 'react';

export interface LanChfSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChfSignThin(props: LanChfSignThinProps): React.ReactElement;
export default LanChfSignThin;
