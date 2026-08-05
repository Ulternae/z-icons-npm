import React from 'react';

export interface LanFaceMehThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMehThin(props: LanFaceMehThinProps): React.ReactElement;
export default LanFaceMehThin;
