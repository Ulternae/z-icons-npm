import React from 'react';

export interface LanPersonFromPortalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFromPortalThin(props: LanPersonFromPortalThinProps): React.ReactElement;
export default LanPersonFromPortalThin;
