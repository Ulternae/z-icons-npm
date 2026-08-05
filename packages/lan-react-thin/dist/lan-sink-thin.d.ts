import React from 'react';

export interface LanSinkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSinkThin(props: LanSinkThinProps): React.ReactElement;
export default LanSinkThin;
