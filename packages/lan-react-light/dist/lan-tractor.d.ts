import React from 'react';

export interface LanTractorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTractor(props: LanTractorProps): React.ReactElement;
export default LanTractor;
