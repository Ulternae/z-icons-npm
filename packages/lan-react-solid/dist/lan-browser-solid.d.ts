import React from 'react';

export interface LanBrowserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrowserSolid(props: LanBrowserSolidProps): React.ReactElement;
export default LanBrowserSolid;
