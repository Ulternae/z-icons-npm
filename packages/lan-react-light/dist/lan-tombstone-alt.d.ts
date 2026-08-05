import React from 'react';

export interface LanTombstoneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTombstoneAlt(props: LanTombstoneAltProps): React.ReactElement;
export default LanTombstoneAlt;
