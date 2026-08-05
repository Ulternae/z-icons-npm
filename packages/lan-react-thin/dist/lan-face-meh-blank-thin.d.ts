import React from 'react';

export interface LanFaceMehBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMehBlankThin(props: LanFaceMehBlankThinProps): React.ReactElement;
export default LanFaceMehBlankThin;
