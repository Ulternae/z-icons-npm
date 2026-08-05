import React from 'react';

export interface LanDesktopCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopCodeSolid(props: LanDesktopCodeSolidProps): React.ReactElement;
export default LanDesktopCodeSolid;
