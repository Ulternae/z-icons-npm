import React from 'react';

export interface LanFaceMeltingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMeltingThin(props: LanFaceMeltingThinProps): React.ReactElement;
export default LanFaceMeltingThin;
