import React from 'react';

export interface LanFaceFlushedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFlushedThin(props: LanFaceFlushedThinProps): React.ReactElement;
export default LanFaceFlushedThin;
