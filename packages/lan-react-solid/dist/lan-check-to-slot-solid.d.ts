import React from 'react';

export interface LanCheckToSlotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckToSlotSolid(props: LanCheckToSlotSolidProps): React.ReactElement;
export default LanCheckToSlotSolid;
