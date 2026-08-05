import React from 'react';

export interface LanCompassDraftingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassDraftingSolid(props: LanCompassDraftingSolidProps): React.ReactElement;
export default LanCompassDraftingSolid;
