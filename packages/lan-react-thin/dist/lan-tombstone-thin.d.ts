import React from 'react';

export interface LanTombstoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTombstoneThin(props: LanTombstoneThinProps): React.ReactElement;
export default LanTombstoneThin;
