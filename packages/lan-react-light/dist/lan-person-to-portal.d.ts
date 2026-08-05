import React from 'react';

export interface LanPersonToPortalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToPortal(props: LanPersonToPortalProps): React.ReactElement;
export default LanPersonToPortal;
