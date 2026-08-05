import React from 'react';

export interface LanFaceMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMaskThin(props: LanFaceMaskThinProps): React.ReactElement;
export default LanFaceMaskThin;
