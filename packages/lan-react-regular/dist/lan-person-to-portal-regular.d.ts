import React from 'react';

export interface LanPersonToPortalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToPortalRegular(props: LanPersonToPortalRegularProps): React.ReactElement;
export default LanPersonToPortalRegular;
