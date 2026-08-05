import React from 'react';

export interface LanDolphinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDolphin(props: LanDolphinProps): React.ReactElement;
export default LanDolphin;
