import React from 'react';

export interface LanThListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThListThin(props: LanThListThinProps): React.ReactElement;
export default LanThListThin;
