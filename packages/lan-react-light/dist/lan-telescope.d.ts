import React from 'react';

export interface LanTelescopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTelescope(props: LanTelescopeProps): React.ReactElement;
export default LanTelescope;
