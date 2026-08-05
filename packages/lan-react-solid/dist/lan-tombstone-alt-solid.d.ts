import React from 'react';

export interface LanTombstoneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTombstoneAltSolid(props: LanTombstoneAltSolidProps): React.ReactElement;
export default LanTombstoneAltSolid;
