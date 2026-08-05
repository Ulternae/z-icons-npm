import React from 'react';

export interface LanSwordThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordThin(props: LanSwordThinProps): React.ReactElement;
export default LanSwordThin;
