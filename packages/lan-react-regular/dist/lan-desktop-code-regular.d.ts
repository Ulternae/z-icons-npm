import React from 'react';

export interface LanDesktopCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopCodeRegular(props: LanDesktopCodeRegularProps): React.ReactElement;
export default LanDesktopCodeRegular;
