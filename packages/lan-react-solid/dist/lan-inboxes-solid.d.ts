import React from 'react';

export interface LanInboxesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxesSolid(props: LanInboxesSolidProps): React.ReactElement;
export default LanInboxesSolid;
