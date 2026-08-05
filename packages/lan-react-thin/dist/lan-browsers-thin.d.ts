import React from 'react';

export interface LanBrowsersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrowsersThin(props: LanBrowsersThinProps): React.ReactElement;
export default LanBrowsersThin;
