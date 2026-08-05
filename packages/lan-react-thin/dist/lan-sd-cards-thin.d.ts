import React from 'react';

export interface LanSdCardsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCardsThin(props: LanSdCardsThinProps): React.ReactElement;
export default LanSdCardsThin;
