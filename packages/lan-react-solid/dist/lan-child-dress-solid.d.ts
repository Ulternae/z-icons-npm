import React from 'react';

export interface LanChildDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildDressSolid(props: LanChildDressSolidProps): React.ReactElement;
export default LanChildDressSolid;
