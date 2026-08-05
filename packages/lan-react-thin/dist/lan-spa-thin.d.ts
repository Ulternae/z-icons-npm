import React from 'react';

export interface LanSpaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpaThin(props: LanSpaThinProps): React.ReactElement;
export default LanSpaThin;
