import React from 'react';

export interface LanPersonFromPortalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFromPortal(props: LanPersonFromPortalProps): React.ReactElement;
export default LanPersonFromPortal;
