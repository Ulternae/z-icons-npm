import React from 'react';

export interface LanPersonToPortalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToPortalThin(props: LanPersonToPortalThinProps): React.ReactElement;
export default LanPersonToPortalThin;
