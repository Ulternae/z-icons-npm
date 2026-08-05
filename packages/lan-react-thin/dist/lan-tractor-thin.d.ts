import React from 'react';

export interface LanTractorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTractorThin(props: LanTractorThinProps): React.ReactElement;
export default LanTractorThin;
