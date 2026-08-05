import React from 'react';

export interface LanFaceDottedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDottedThin(props: LanFaceDottedThinProps): React.ReactElement;
export default LanFaceDottedThin;
