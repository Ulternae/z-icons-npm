import React from 'react';

export interface LanTombstoneAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTombstoneAltThin(props: LanTombstoneAltThinProps): React.ReactElement;
export default LanTombstoneAltThin;
