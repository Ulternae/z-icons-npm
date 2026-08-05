import React from 'react';

export interface LanTombstoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTombstone(props: LanTombstoneProps): React.ReactElement;
export default LanTombstone;
