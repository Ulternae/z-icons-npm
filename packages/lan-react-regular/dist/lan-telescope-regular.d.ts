import React from 'react';

export interface LanTelescopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTelescopeRegular(props: LanTelescopeRegularProps): React.ReactElement;
export default LanTelescopeRegular;
